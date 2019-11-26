const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models/');

const app = express();

const AuthService = {
    login: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        if (user) {
            if (user.email === email && user.password === password) {
                const token = jwt.sign(
                    { email },
                    'palavrasecreta',
                    {
                        algorithm: 'HS256',
                        expiresIn: 3600
                    });
                res.json({
                    token
                })
            } else {
                res.json({
                    error: 'Invalid username or password'
                });
            }
        } else {
            res.json({
                error: 'User does not exists'
            });
        }
    },
    verify: async (req, res, next) => {
        const token = req.headers.authorization;

        if (token) {
            jwt.verify(token.split(' ')[1], 'palavrasecreta', (error, decoded) => {
                if (error) {
                    res.json({
                        error
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.json({
                error: 'Token does not provided'
            });
        }
    }
};

module.exports = AuthService;