import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { IProduct } from '../interfaces/Product';

const createProduct = async (req: Request, res: Response): Promise<Response<IProduct>> => {
  const product = req.body as IProduct;
  const newProduct = await productsService.createProduct(product);
  return res.status(201).json(newProduct);
};

export default { createProduct };
