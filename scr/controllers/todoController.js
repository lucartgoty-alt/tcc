import { Router } from 'express';

import Todo from '../../models/Todo.js';

export const getTodos = (req, res) => {
    const { userid } = req.params;
    Todo.findAll({ where: { userid } })
        .then(todos => {
            res.status(200).json(todos);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve todos' });
        });
}

export const createTodo = (req, res) => {
    const { title, description, id, userid } = req.body;
    Todo.create({ title, description, userid, id })
        .then(todo => {
            res.status(201).json(todo);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to create todo' });
        });
}

export const deleteTodo = (req, res) => {
    const { id, userid } = req.params;
    Todo.destroy({ where: { id, userid } })
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ message: 'Todo deleted successfully' });
            } else {
                res.status(404).json({ error: 'Todo not found' });
            }   
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to delete todo' });
        });
}
export const updateTodoCompletion = (req, res) => {
    const { id, userid, completed } = req.params;
    Todo.update({ completed: completed === 'true' }, { where: { id, userid } })
        .then(([updated]) => {
            if (updated) {
                res.status(200).json({ message: 'Todo updated successfully' });
            } else {
                res.status(404).json({ error: 'Todo not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to update todo' });
        });
}
