const express = require('express');
const router = express.Router();
const {ProductController}= require('../controllers/ProductController.js')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer(storage)

var productController= new ProductController
//Para que 
router.post('/create',productValidationRules(),validate,upload.single('imageUrl'),productController.create)

router.get('/show/all',productController.getAll)
	
router.get('/show/:id',productController.get)

router.put('/update/:id',productController.update)
	
module.exports = router;