const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  completed:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {

  tableName: 'Todo' 
});

User.hasMany(Todo, { foreignKey: 'userId' });
Todo.belongsTo(User, { foreignKey: 'userId'});

module.exports = Todo;