const { Router } = require('express');
const todo = require('../controllers/todoController.js')
const toDoRouter = Router()
toDoRouter.get('/:userid', todo.getTodos);
toDoRouter.put('/:id/:title/:description/:userid', todo.createTodo); 
toDoRouter.delete('/:id/:userid', todo.deleteTodo);
toDoRouter.post('/:userid/:id/:completed', todo.updateTodoCompletion);
module.exports = toDoRouter;