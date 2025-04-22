import { getAllProducts, deleteProductById } from "../repo/products-repository.ts";

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

export const deleteProductByIdService = async (id : string) => {
  const data = await deleteProductById(id);
  let status = 0;

  if (data) {
    status = 200;
  } else {
    status = 204;
  }

  return { data, status };
};
