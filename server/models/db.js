const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('todolist', 'sauchingloke', '', {
    host: 'localhost',
    dialect: 'postgres', 
    logging: false
});


const ToDo = sequelize.define('ToDo', {
    task: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    urgency: {
      type: DataTypes.STRING
    }
  });


module.exports = {sequelize, DataTypes, ToDo} 