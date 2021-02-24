const router = require('express').Router()
const CartController = require('../controllers/cartController')

const { authenticate } = require("../midwares/authenticate")

router.use(authenticate)
router.get('/', CartController.getCart)
router.post('/', CartController.addCart)
// router.put('/:id', CartController.editCart)
router.delete('/:id', CartController.destroyCart)

module.exports = router