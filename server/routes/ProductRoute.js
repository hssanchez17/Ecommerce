const express = require('express');
const router = express.Router();
const productController= require('../controllers/ProductController')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')


	router.post('/create',productValidationRules(),validate,productController.create)

	
module.exports = router;