'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Product,{foreignKey: 'productId'}),
      Cart.belongsTo(models.User,{foreignKey: 'userId'})
    }

  };
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'amount cannot be empty'
        },
        min: {
          args: [0],
          msg: "Minimum amount must be zero"
        }
      },
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Total price cannot be empty'
        },
        min: {
          args: [0],
          msg: "Minimum Total price must be zero"
        }
      },
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};