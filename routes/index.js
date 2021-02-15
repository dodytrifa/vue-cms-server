const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const productRouter = require('./product')

router.use('/products', productRouter)

router.use('/users', userRouter)

module.exports = router