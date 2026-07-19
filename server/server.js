import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import Stripe from "stripe";

dotenv.config()

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)

app.get("/", (req,res) => {
    res.send("API is running")
})

app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const {items, customer } = req.body
        if(!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                error: "Your cart is empty.",
            })
        }


        // Lookup prices in database. dont trust the price in react
        const lineItems = items.map((item) => {
            const product = products[item.pid]

            if(!product) {
                throw new Error(`Invalid product: ${item.pid}`)
            }
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.priceInCents,
                },
                quantity: Number(item.selected),
            }
        })

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: lineItems,
            customer_email: customer.email,
            billing_address_collection:"required",
            shipping_address_collection: {
                allowed_countries: ["US"],
            },
            success_url: `${process.env.CLIENT_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/checkout`,
        })

        res.json({
            url:session.url,
        })

       
    } catch (error) {
        console.error("Checkour error:", error)

        res.status(500).json({
            error: error.message || "Unable to create checkout session.",
        })
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})