const { Product } = require('../models/')

class ProductController {
  static getProducts(req, res, next) {
    res.send('ini get')
  }
  static addProducts(req, res, next) {
    res.send('ini add')
  }
  static editProducts(req, res, next) {
    res.send('ini edit')
  }
  static destroyProducts(req, res, next) {
    res.send('ini delete')
  }
}

module.exports = ProductController