import { IOrder } from '../interfaces/Order';
import ordersModel from '../models/orders.model';

const getOrders = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getOrders();
  return orders;
};

export default { getOrders };