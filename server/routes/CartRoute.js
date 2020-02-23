const express = require('express');
const router = express.Router();
const {CartController}= require('../controllers/CartController.js')


var cartController= new CartController

router.post('/register-product/:id',cartController.registerAProduct)

module.exports = router;
