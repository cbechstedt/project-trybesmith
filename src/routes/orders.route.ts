import express from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getOrders);

export default ordersRouter;