const router = require('express').Router();

const { verify } = require('../services/authService');
const UserService = require('../services/userService');

// List all users
router.get('/users', verify, UserService.list);

// Create a new user
router.post('/users', verify, UserService.store);

// Get a specific user
router.get('/users/:id', verify, UserService.show);

// Update an user
router.put('/users/:id', verify, UserService.update);

// Delete an user
router.delete('/users/:id', verify, UserService.destroy);

// Register a new user
router.post('/register', UserService.store);

module.exports = { UserController: router };