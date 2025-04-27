import { getAllProducts, deleteProductById, createProduct, updateProduct } from "./controllers/products-controller.js";
import { Router } from "express";

const router = Router();

router.get("/products", getAllProducts);
router.delete("/products/:id", deleteProductById)
router.post("/products/", createProduct)
router.patch("/products/:id", updateProduct)

export default router