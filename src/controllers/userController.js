import User from '../../models/User.js';

exports.getUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve users' });
        });
}

exports.createUser = (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to create user' });
        });
}

exports.getUser = (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }   
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to retrieve user' });
        });
}

