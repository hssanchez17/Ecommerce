const express = require('express');
const router = express.Router();


	router.use('/',require('./AuthRoute'))
	router.use('/product',require('./ProductRoute'))

module.exports = router;