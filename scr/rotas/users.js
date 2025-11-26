import { Router } from 'express';
import { getUsers, createUser, getUser } from '../controllers/userController.js';


const userRouter = Router()

userRouter.get('/', getUsers);


userRouter.put('/:id/:username/:password', createUser);


userRouter.get('/:id', getUser);

module.exports = userRouter;