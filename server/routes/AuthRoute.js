const express = require('express');
const router = express.Router();
const {register}=require('../controllers/auth/RegisterController')
const {login}=require('../controllers/auth/LoginController')
const {checkAuthentication}=require('../controllers/auth/AuthenticationController')
const {logout}=require('../controllers/auth/LogoutController')



router.post('/register',register);//Listo
router.post('/login',login)
router.get('/auth',checkAuthentication)
router.post('/logout',logout)


module.exports = router;