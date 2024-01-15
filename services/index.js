const express = require('express');

const login = require("../services/login/index")
const signup = require("../services/register/signup")
const router = express.Router();


router.post('/login',login)
router.post('/signup',signup)


module.exports = router;