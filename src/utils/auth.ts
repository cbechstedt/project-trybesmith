import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

const secret: string = process.env.JWT_SECRET || 'secret';

const configJWT: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: IUser) => {
  const token = jwt.sign(payload, secret, configJWT);
  return token;
};

export default { generateToken };