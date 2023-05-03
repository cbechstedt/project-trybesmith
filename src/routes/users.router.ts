import express from 'express';
import usersController from '../controllers/users.controller';

const usersRouter = express.Router();

usersRouter.post('/', usersController.createUser);

export default usersRouter;