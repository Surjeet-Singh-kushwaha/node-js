const express = require('express')
const router = express.Router();
const authRegister = require('../controllers/register');
const authLogin = require('../controllers/login');

router.post('/register',authRegister.register);
router.post('/login',authLogin.login);

 module.exports = router;
