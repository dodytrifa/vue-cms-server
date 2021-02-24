const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const productRouter = require('./product')
const cartRouter = require('./cart')

router.use('/products', productRouter)

router.use('/users', userRouter)

router.use('/cart', cartRouter)

module.exports = router