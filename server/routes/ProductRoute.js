const express = require('express');
const router = express.Router();
const {ProductController}= require('../controllers/ProductController.js')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer(storage)

var productController= new ProductController

router.post('/create',upload.single('imageUrl'),productValidationRules(), validate,productController.create)

router.get('/show/all',productController.getAll)
	
router.get('/show/:id',productController.get)
	
module.exports = router;