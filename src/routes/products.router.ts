import express from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', productsController.createProduct);
productsRouter.get('/', productsController.getProducts);

export default productsRouter;