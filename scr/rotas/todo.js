const { Router } = require('express');
import { getTodos, createTodo, deleteTodo, updateTodoCompletion } from '../controllers/todoController.js'; 
const toDoRouter = Router()

toDoRouter.get('/:userid', getTodos);

toDoRouter.put('/:id/:title/:description/:userid', createTodo); 

toDoRouter.delete('/:id/:userid', deleteTodo);

toDoRouter.post('/:userid/:id/:completed', updateTodoCompletion);

module.exports = toDoRouter;