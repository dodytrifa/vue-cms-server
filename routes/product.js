const router = require('express').Router()
const ProductController = require('../controllers/productController')

const { authenticate } = require("../midwares/authenticate")
const authorize = require("../midwares/authorize")

router.use(authenticate)
router.get('/', ProductController.getProducts)

// router.use('/:id', authorize)
router.post('/', authorize, ProductController.addProducts)
router.get('/:id', authorize, ProductController.getProductId)
router.put('/:id', authorize, ProductController.editProducts)
router.delete('/:id', authorize, ProductController.destroyProducts)

module.exports = router
