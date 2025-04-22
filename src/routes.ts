import { getAllProducts, deleteProductById } from "./controllers/products-controller.js";
import { Router } from "express";

const router = Router();

router.get("/products", getAllProducts);
router.delete("/products/:id", deleteProductById)

// router.get("/products/:id", getProductsById)

export default router