import { Request, Response } from 'express';
import { IUser } from '../interfaces/User';
import usersService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const token = await usersService.createUser(user);
  return res.status(201).json({ token });
};

export default { createUser };