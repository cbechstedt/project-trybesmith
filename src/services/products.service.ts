import { IProduct } from '../interfaces/Product';
import productsModel from '../models/products.model';

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

const getProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getProducts();
  return products;
};

export default { createProduct, getProducts };