import express from "express";
import {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  getCategoryProducts
} from "../controllers/productController.js";

const router = express.Router();

router.get("/featured", getFeaturedProducts)
router.get("/:id", getProductById);
router.get("/", getAllProducts);
router.get("/category/:category", getCategoryProducts)


export default router;