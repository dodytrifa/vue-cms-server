'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Product, { through: models.Cart, foreignKey: 'id' })
    }

  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email format'
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: "password must contain min 6 characters"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer"
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        user.password = hash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};