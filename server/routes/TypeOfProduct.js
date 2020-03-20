const express = require('express');
const router = express.Router();
const {TypeOfProductController}= require('../controllers/TypeOfProductController.js')

var typeOfProductController= new TypeOfProductController()

router.post('/create',typeOfProductController.create)
router.get('/show/all',typeOfProductController.getAll)
router.get('/show/:id',typeOfProductController.get)
router.put('/update/:id',typeOfProductController.update)

module.exports = router;
