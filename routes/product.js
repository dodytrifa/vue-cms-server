const router = require('express').Router()
const ProductController = require('../controllers/productController')

const { authenticate } = require("../midwares/authenticate")
// const { authorize } = require("../midwares/authorize")

router.use(authenticate)
router.get('/', ProductController.getProducts)

// router.use(authorize)
router.post('/', ProductController.addProducts)
router.put('/', ProductController.editProducts)
router.delete('/', ProductController.destroyProducts)

module.exports = router
