import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const orders = new Map();

/*
  1. Stripe webhook comes first.

  Do not put express.json() above this route.
*/
app.post(
  "/api/stripe-webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.error(
        "Webhook signature verification failed:",
        error.message,
      );

      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;

          if (session.payment_status === "paid") {
            await markOrderPaid(session);
          }

          break;
        }

        case "checkout.session.async_payment_succeeded": {
          const session = event.data.object;

          await markOrderPaid(session);
          break;
        }

        case "checkout.session.async_payment_failed": {
          const session = event.data.object;

          await markOrderFailed(session);
          break;
        }

        default:
          console.log(`Unhandled Stripe event: ${event.type}`);
      }

      return res.sendStatus(200);
    } catch (error) {
      console.error("Webhook processing failed:", error);

      return res.sendStatus(500);
    }
  },
);

/*
  2. Normal middleware comes after the webhook.
*/
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(express.json());

/*
  3. Your normal API routes.
*/
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

/*
  4. Temporary order-update functions.
*/
async function markOrderPaid(session) {
  const orderId = session.metadata?.orderId;

  if (!orderId) {
    throw new Error("The Stripe session has no orderId.");
  }

  const order = orders.get(orderId);

  if (!order) {
    throw new Error(`Order ${orderId} was not found.`);
  }

  // Stripe can send the same webhook more than once.
  if (order.status === "paid") {
    console.log(`Order ${orderId} is already marked paid.`);
    return;
  }

  order.status = "paid";
  order.stripeSessionId = session.id;
  order.paymentIntentId = session.payment_intent;
  order.amountPaid = session.amount_total;
  order.paidAt = new Date().toISOString();

  orders.set(orderId, order);

  console.log("Order marked paid:", order);
}

async function markOrderFailed(session) {
  const orderId = session.metadata?.orderId;

  if (!orderId) {
    return;
  }

  const order = orders.get(orderId);

  if (!order) {
    return;
  }

  order.status = "payment_failed";
  order.updatedAt = new Date().toISOString();

  orders.set(orderId, order);

  console.log("Order payment failed:", order);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});