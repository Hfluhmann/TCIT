const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');

const Post = sequelize.define('Post', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { tableName: 'posts' });

module.exports = {
  Post
};
