const express = require('express');
const router = express.Router();
const cartController= require('../controllers/CartController')


router.post('/create',cartController.create)
router.post('/add-product',cartController.addProduct)
router.get('/show',cartController.get)


const {CartController}= require('../controllers/CartController.js')


var cartController= new CartController

router.post('/register-product/:id',cartController.registerAProduct)

module.exports = router;
