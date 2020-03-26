const express = require('express');
const router = express.Router();
const {ProductController}= require('../controllers/ProductController.js')
const {productValidationRules,validate } = require('../middlewares/validator/ProductValidator.js')
const storage = require('../middlewares/multer')
const multer = require('multer')
const upload = multer(storage)

var productController= new ProductController

router.post('/create',upload.single('imageUrl'),productValidationRules(),validate,productController.create)
router.get('/show/all',productController.getAll)
router.get('/show/3',productController.getTheFirst3)
router.get('/show/:id',productController.get)
router.get('/show/products-by-type/:typeOfProductId',productController.getAllProductsByType)
router.put('/update/:id',productController.update)
router.delete('/destroy/:id',productController.destroy)
	
module.exports = router;