import express from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', productsController.createProduct);

export default productsRouter;