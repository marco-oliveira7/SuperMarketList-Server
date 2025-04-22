import { ProductModel } from "../model/product-model";

const database : ProductModel[]= [
  {
    id: "0",
    name: "Molho de Tomate"
  },
  {
    id: "1",
    name: "Pimenta"
  },
];

export const getAllProducts = async () => {
  return database;
};

export const deleteProductById = async (id : string) => {
  
  const index = database.findIndex((p) => p.id === id)

  if(index !== -1){
    database.splice(index, 1)
    return true
  }
  return false;
};
