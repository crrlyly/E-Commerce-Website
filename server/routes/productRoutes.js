import express from "express";
import {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/featured", getFeaturedProducts)
router.get("/:id", getProductById);
router.get("/", getAllProducts);


export default router;