const router = require('express').Router();

const { login } = require('../services/authService');

router.post('/login', login);

module.exports = { AuthController: router };