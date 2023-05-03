import { IUser } from '../interfaces/User';
import usersModel from '../models/users.model';
import auth from '../utils/auth';

const createUser = async (user: IUser): Promise<string> => {
  const newUser = await usersModel.createUser(user);
  const token = auth.generateToken(newUser);
  return token;
};

export default { createUser };