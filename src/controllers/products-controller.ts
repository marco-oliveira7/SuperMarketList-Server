import {
  getAllProductsService,
  deleteProductByIdService,
  createProductService,
} from "../services/products-service.js";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  const { data, status } = await getAllProductsService();

  res.status(status).json(data);
};

export const deleteProductById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, status } = await deleteProductByIdService(id);

  res.status(status).json(data);
};

export const createProduct = async (req: Request, res: Response) => {
  const body = req.body;
  const { data, status } = await createProductService(body);

  res.status(status).json(data);
};
