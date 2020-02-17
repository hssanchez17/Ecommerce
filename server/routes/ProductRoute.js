const express = require('express');
const router = express.Router();
const productController= require('../controllers/ProductController')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer(storage)


	router.post('/create',upload.single('imageUrl'),productController.create)
	router.get('/show/all',productController.getAll)
	router.get('/show/:id',productController.get)
	
module.exports = router;