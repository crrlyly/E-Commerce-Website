import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Stripe from "stripe";
// import crypto from "crypto";
// import db from "./config/db.js"
// import session from "express-session";
// import { RedisStore } from "connect-redis";
// import { createClient } from "redis";
// import helmet from "helmet";;
// import argon2 from "argon2";
// import rateLimit from "express-rate-limit";

// import productRoutes from "./routes/productRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";

// dotenv.config();

// const app = express();
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const orders = new Map();

// // Create Redis Connection

// const redisClient = createClient({
//   url: process.env.REDIS_URL,
// });

// redisClient.on("error", (error) => {
//   console.error("Redis error:", error);
// });

// await redisClient.connect();

// const redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "carlyshop:",
// });

// /*
//   Stripe webhook must be before express.json().
// */
// app.post(
//   "/api/stripe-webhook",
//   express.raw({ type: "application/json" }),
//   async (req, res) => {
//     const signature = req.headers["stripe-signature"];

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(
//         req.body,
//         signature,
//         process.env.STRIPE_WEBHOOK_SECRET,
//       );
//     } catch (error) {
//       console.error("Webhook signature verification failed:", error.message);

//       return res.status(400).send(`Webhook Error: ${error.message}`);
//     }

//     try {
//       switch (event.type) {
//         case "checkout.session.completed": {
//           const session = event.data.object;

//           if (session.payment_status === "paid") {
//             markOrderPaid(session);
//           }

//           break;
//         }

//         case "checkout.session.async_payment_succeeded": {
//           markOrderPaid(event.data.object);
//           break;
//         }

//         case "checkout.session.async_payment_failed": {
//           markOrderFailed(event.data.object);
//           break;
//         }

//         default:
//           console.log(`Unhandled Stripe event: ${event.type}`);
//       }

//       return res.sendStatus(200);
//     } catch (error) {
//       console.error("Webhook processing failed:", error);
//       return res.sendStatus(500);
//     }
//   },
// );

// app.use(helmet());

// /*
//   Normal middleware.
// */
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   }),
// );

// app.use(express.json());

// const isProduction = process.env.NODE_ENV === "production";

// if (isProduction) {
//   app.set("trust proxy", 1);
// }

// app.use(
//   session({
//     store: redisStore,

//     name: isProduction
//       ? "__Host-carlyshop"
//       : "carlyshop",

//     secret: process.env.SESSION_SECRET,

//     resave: false,

//     saveUninitialized: false,

//     rolling: true,

//     cookie: {
//       httpOnly: true,

//       secure: isProduction,

//       sameSite: "lax",

//       path: "/",

//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   }),
// );

// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// /*
//   Stripe Checkout route.
// */
// app.post("/api/create-checkout-session", async (req, res) => {
//   try {
//     const { customer, items } = req.body;

//     if (!customer?.email) {
//       return res.status(400).json({
//         error: "Customer email is required.",
//       });
//     }

//     if (!Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({
//         error: "Your cart is empty.",
//       });
//     }

//     const lineItems = await Promise.all(
//       items.map(async (item) => {
//         const productId = Number(item.pid);
//         const quantity = Number(item.selected);

//         if (!Number.isInteger(productId) || productId < 1) {
//           throw new Error(`Invalid product ID: ${item.pid}`);
//         }

//         if (!Number.isInteger(quantity) || quantity < 1) {
//           throw new Error(`Invalid quantity for product ${item.pid}.`);
//         }

//         const [rows] = await db.execute(
//           `
//         SELECT
//           pid,
//           pname,
//           price
//         FROM product
//         WHERE pid = ?
//         LIMIT 1
//       `,
//           [productId],
//         );

//         const product = rows[0];

//         if (!product) {
//           throw new Error(`Product ${productId} was not found.`);
//         }

//         const price = Number(product.price);

//         if (!Number.isFinite(price) || price < 0) {
//           throw new Error(`Product ${productId} has an invalid price.`);
//         }

//         return {
//           price_data: {
//             currency: "usd",

//             product_data: {
//               name: product.pname,
//             },

//             // Convert a database price such as 19.99 into 1999 cents.
//             unit_amount: Math.round(price * 100),
//           },

//           quantity,
//         };
//       }),
//     );

//     const orderId = crypto.randomUUID();

//     orders.set(orderId, {
//       id: orderId,
//       customer,
//       items,
//       status: "pending",
//       createdAt: new Date().toISOString(),
//     });

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",

//       line_items: lineItems,

//       customer_email: customer.email,

//       metadata: {
//         orderId,
//       },

//       client_reference_id: orderId,

//       billing_address_collection: "required",

//       shipping_address_collection: {
//         allowed_countries: ["US"],
//       },

//       success_url:
//         `${process.env.CLIENT_URL}/checkout-success` +
//         "?session_id={CHECKOUT_SESSION_ID}",

//       cancel_url: `${process.env.CLIENT_URL}/checkout`,
//     });

//     const order = orders.get(orderId);

//     order.stripeSessionId = session.id;

//     orders.set(orderId, order);

//     return res.json({
//       url: session.url,
//     });
//   } catch (error) {
//     console.error("Create Checkout Session error:", error);

//     return res.status(500).json({
//       error: error.message || "Unable to create Stripe Checkout Session.",
//     });
//   }
// });

// function markOrderPaid(session) {
//   const orderId = session.metadata?.orderId;

//   if (!orderId) {
//     throw new Error("Stripe Session has no orderId.");
//   }

//   const order = orders.get(orderId);

//   if (!order) {
//     throw new Error(`Order ${orderId} was not found.`);
//   }

//   if (order.status === "paid") {
//     return;
//   }

//   order.status = "paid";
//   order.paymentIntentId = session.payment_intent;
//   order.amountPaid = session.amount_total;
//   order.paidAt = new Date().toISOString();

//   orders.set(orderId, order);

//   console.log("Order marked paid:", order);
// }

// function markOrderFailed(session) {
//   const orderId = session.metadata?.orderId;

//   if (!orderId) {
//     return;
//   }

//   const order = orders.get(orderId);

//   if (!order) {
//     return;
//   }

//   order.status = "payment_failed";
//   order.updatedAt = new Date().toISOString();

//   orders.set(orderId, order);
// }

// const authLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,

//   limit: 10,

//   standardHeaders: true,

//   legacyHeaders: false,

//   message: {
//     error: "Too many login attempts. Try again later.",
//   },
// });

// router.use("/login", authLimiter);
// router.use("/signup", authLimiter);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
