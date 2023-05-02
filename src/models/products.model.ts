import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct } from '../interfaces/Product';

const createProduct = async (product:IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const newProduct = {
    id: insertId,
    ...product,
  };
  return newProduct;
};

export default { createProduct };