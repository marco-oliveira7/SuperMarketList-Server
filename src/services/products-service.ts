import { ProductModel } from "../model/product-model";
import {
  getAllProducts,
  deleteProductById,
  createProduct,
  updateProduct,
} from "../repo/products-repository";

export const getAllProductsService = async () => {
  const data = await getAllProducts();
  let status = 0;

  if (data) {
    status = 200;
  } else {
    status = 204;
  }

  return { data, status };
};

export const deleteProductByIdService = async (id: string) => {
  const data = await deleteProductById(id);
  let status = 0;

  if (data) {
    status = 200;
  } else {
    status = 400;
  }

  return { data, status };
};

export const createProductService = async (product: ProductModel) => {
  let status = 0;
  let data;

  if (Object.keys(product).length !== 0) {
    data = await createProduct(product);
    status = 201;
  } else {
    status = 400;
  }
  return { data, status };
};

export const updateProductService = async (id: string) => {
  let status = 0;
  let data = await updateProduct(id);

  if (data) {
    status = 200;
  } else {
    status = 400;
  }
  return { data, status };
};
