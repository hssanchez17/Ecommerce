const express = require('express');
const router = express.Router();
const {TypeOfProductController}= require('../controllers/TypeOfProductController.js')

var typeOfProductController= new TypeOfProductController()

router.post('/create',typeOfProductController.create)

module.exports = router;
