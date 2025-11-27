import { Router } from 'express';
const user = require('../controllers/userController.js')
const userRouter = Router()
userRouter.get('/', user.getUsers);
userRouter.put('/:id/:username/:password', user.createUser);
userRouter.get('/:id', user.getUser);
module.exports = userRouter;