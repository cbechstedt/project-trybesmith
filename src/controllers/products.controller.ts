import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { IProduct } from '../interfaces/Product';

const createProduct = async (req: Request, res: Response): Promise<Response<IProduct>> => {
  const product = req.body as IProduct;
  const newProduct = await productsService.createProduct(product);
  return res.status(201).json(newProduct);
};

const getProducts = async (req: Request, res: Response) => {
  const products = await productsService.getProducts();
  return res.status(200).json(products);
};

export default { createProduct, getProducts };
