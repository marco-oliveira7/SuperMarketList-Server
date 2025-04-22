import {getAllProductsService, deleteProductByIdService} from "../services/products-service.js"
import { Request, Response } from "express";

export const getAllProducts = async (req : Request, res : Response) => {
    const { data, status } = await getAllProductsService()

    res.status(status).json(data);
}

export const deleteProductById = async (req : Request, res : Response) => {
    const id = req.params.id
    const { data, status } = await deleteProductByIdService(id)

    res.status(status).json(data);
}