import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
// import { IOrder } from '../interfaces/Order';

const getOrders = async (req: Request, res: Response)/* : Promise<Response<IOrder[]>> */ => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

export default { getOrders };