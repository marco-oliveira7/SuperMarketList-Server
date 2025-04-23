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
    if(index !== database.length){
      database?.forEach(product => {
        let id = parseInt(product.id)
        id--
        product.id = id.toString()
      });
    }
    database.splice(index, 1)
    return true
  }
  return false;
};

export const createProduct = async (product : ProductModel): Promise<string> => {
  const existentId = database.find((p) => p.id === product.id)
  let message;

  if(existentId){
    message = "Error! this product already exist"
  }else{
    database.push(product)
    message = "Sucessfull"
  }
  return message
}