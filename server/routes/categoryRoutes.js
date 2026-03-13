import express from "express";
import { getAllCategories, getCategoryItemCount } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id/count", getCategoryItemCount)

export default router;