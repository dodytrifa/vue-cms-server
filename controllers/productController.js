const { Product } = require('../models/')

class ProductController {
  static getProducts(req, res, next) {
    Product.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  }
  static addProducts(req, res, next) {
    const { name, image_url, price, stock } = req.body
    Product.create({
      name, image_url, price, stock
    })
      .then(data => {
        console.log(data);
        res.status(201).json(data)
      })
      .catch(err => {
        // res.status(500).json(err)
        next(err)
      })
  }

  static editProducts(req, res, next) {
    const id = +req.params.id
    const { name, image_url, price, stock } = req.body
    Product.update({
      name, image_url, price, stock
    },
      { where: { id }, returning: true }
    )
      .then(data => {
        res.status(200).json(data[1][0])
      })
      .catch(err => {
        console.log(err);
        next(err)
        // res.status(500).json(err)
      })
  }

  static getProductId(req, res) {
    const id = +req.params.id
 
    Product.findOne({
      where: { id }, returning: true
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        // next(err)
        res.status(500).json(err)
      })
  }

  static destroyProducts(req, res, next) {
    const id = +req.params.id

    Product.destroy({
      where: { id }, returning: true
    })
      .then(data => {
        res.status(200).json({ message: "Product Successfully deleted" })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = ProductController