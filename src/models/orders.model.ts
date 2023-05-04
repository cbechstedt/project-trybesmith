import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/Order';
import connection from './connection';

const getOrders = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute<(IOrder & RowDataPacket)[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY orders.id`);
  return result;
};

export default { getOrders };