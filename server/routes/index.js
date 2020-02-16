const express = require('express');
const router = express.Router();


	router.use('/auth',require('./AuthRoute'))
	router.use('/product',require('./ProductRoute'))

module.exports = router;