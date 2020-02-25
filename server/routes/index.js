const express = require('express');
const router = express.Router();


	router.use('/',require('./AuthRoute'))
	router.use('/product',require('./ProductRoute'))
	router.use('/cart',require('./CartRoute'))
	router.use('/order',require('./OrderRoute'))


module.exports = router;