const express = require('express');
const router = express.Router();


	router.use('/auth',require('./AuthRoute'))
	router.use('/test',require('./test'))

module.exports = router;