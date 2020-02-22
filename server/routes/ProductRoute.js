const express = require('express');
const router = express.Router();
const {ProductController}= require('../controllers/ProductController.js')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer(storage)

var productController= new ProductController

router.post('/create',productValidationRules(),validate,upload.single('imageUrl'),function(req,res){
	productController.create(req,res)
})

router.get('/show/all',function(req,res){
	productController.getAll(req,res)
})
	
router.get('/show/:id',function(req,res){
	productController.get(req,res)
})
	
module.exports = router;