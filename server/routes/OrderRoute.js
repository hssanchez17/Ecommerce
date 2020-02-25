const express = require('express');
const router = express.Router();
const {OrderController}= require('../controllers/OrderController')


var orderController= new OrderController

router.post('/create/:productId',orderController.createAnOrderFromTheCart)


module.exports = router;
