import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import sessionMiddleware from "./config/session.js";

// import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
// import checkoutRoutes from "./routes/checkoutRoutes.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use(sessionMiddleware);

// app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
// app.use("/api/checkout", checkoutRoutes);

app.get("/api/test-session", (req, res) => {
  if (!req.session.visits) {
    req.session.visits = 1;
  } else {
    req.session.visits++;
  }

  res.json({
    visits: req.session.visits,
  });
});


app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;