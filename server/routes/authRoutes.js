import express from "express";

import {
  signup,
//   login,
//   logout,
//   getCurrentUser,
} from "../controllers/authController.js";

import { authLimiter } from "../middleware/authLimiter.js";

const router = express.Router();

// router.post("/signup", authLimiter, signup);
// router.post("/login", authLimiter, login);
// router.post("/logout", logout);
// router.get("/me", getCurrentUser);

export default router;