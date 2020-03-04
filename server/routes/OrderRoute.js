const express = require('express');
const router = express.Router();
const {OrderController}= require('../controllers/OrderController')


var orderController= new OrderController

router.post('/buy/product/from-cart/:productId',orderController.createAnOrderFromTheCart)
router.post('/buy/:productId',orderController.create)
router.get('/getAll',orderController.getAllOrders)


module.exports = router;
