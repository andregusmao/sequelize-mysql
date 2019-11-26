const express = require('express');
const router = express.Router();

const AuthService = require('../services/authService');
const UserService = require('../services/userService');

// List all users
router.get('/users', AuthService.verify, UserService.list);

// Create a new user
router.post('/users', AuthService.verify, UserService.store);

// Get a specific user
router.get('/users/:id', AuthService.verify, UserService.show);

// Update an user
router.put('/users/:id', AuthService.verify, UserService.update);

// Delete an user
router.delete('/users/:id', AuthService.verify, UserService.destroy);

// Register a new user
router.post('/register', UserService.store);

module.exports = { UserController: router };