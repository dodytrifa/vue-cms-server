'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.User, {through: models.Cart, foreignKey:'id'})
    }
    
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Product name cannot be empty'
        }
      }
    },

    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Image url name cannot be empty'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Price cannot be empty'
        },
        min: {
          args: [0],
          msg: "Minimum price must be zero"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Stock cannot be empty'
        },
        min: {
          args: [0],
          msg: "Minimum stock must be zero"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};