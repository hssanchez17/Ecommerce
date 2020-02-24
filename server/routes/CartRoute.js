const express = require('express');
const router = express.Router();
const {CartController}= require('../controllers/CartController')

var cartController= new CartController

router.post('/register-product/:id',cartController.registerAProduct)
router.get('/show',cartController.getAllProductsFromACart)
router.get('/permission-to-add-to-cart/:productId',cartController.getPermissionToAddToCart)
router.post('/increase-product/:productId',cartController.increaseTheQuantityOfTheProduct)
router.post('/decrease-product/:productId',cartController.decreaseTheQuantityOfTheProduct)
router.post('/remove-product/:productId',cartController.removeAProductFromTheCart)


module.exports = router;
