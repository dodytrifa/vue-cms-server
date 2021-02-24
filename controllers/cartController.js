// const e = require('express')
const {Op} = require('sequelize')
const {Cart} = require('../models/')
const {User} = require('../models/')
const {Product} = require('../models/')

class CartController {
    static getCart (req,res) {
      Cart.findAll({where: {userId: req.decoded.id}, include: [Product]})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
    }

    static addCart(req,res){      
      const {productId,amount,totalPrice} = req.body
      
      let selectedData = 0 
      let selectedStock = 0
      let selectedId = 0
      let selectedPrice = 0
      Cart.findOne({where: {[Op.and]: [{userId:req.decoded.id}, {productId}]}})
      .then(data => {
        if(!data) {
          throw({})
        }else {
          selectedPrice = Number(data.totalPrice)
          selectedId = Number(data.id)
          selectedData = data.amount
          Product.findByPk(productId)
          .then(data => {
            if(!data) {
              res.status(404).json({message:'data not found'})
            }else {
              selectedStock = data.stock
              if(data.stock < amount){
                res.status(400).json({message:'Amount is larger than stock'})
              }else {
                let newAmount = Number(selectedData) + Number(amount)
                if(newAmount > selectedStock){
                  res.status(400).json({message:'Amount is larger than stock'})
                } else {
                  let newTotalPrice = totalPrice * newAmount 
                  Cart.update({
                    amount:newAmount, totalPrice:newTotalPrice 
                  },
                    { where: { id: selectedId }, returning: true })
                  .then(data => {
                    res.status(200).json(data)
                  })
                }
              }
            }
          })
        }
      })
      .catch(err => {
        if(err.name === 'customError'){
          res.status(400).json(err)
        } else {
          return Cart.create({
            userId: req.decoded.id,productId,amount,totalPrice
          })
          .then(data => {
            console.log(data);
           res.status(201).json(data)
          })
        }
      })
    }

    static destroyCart(req,res){
      const id = +req.params.id

      Cart.destroy({
        where: { id }, returning: true
      })
      .then(data => {
        res.status(200).json({ message: "Item successfully deleted" })
      })
      .catch(err => {
        res.status(500).json(err)
      })
    } 
}

module.exports = CartController