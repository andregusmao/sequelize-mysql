const jwt = require('jsonwebtoken');
const { User } = require('../models/');

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
        const { query } = req.body;

        if (query === undefined) {
            next();
        } else {
            if (query.indexOf('login') < 0 && query.indexOf('register') < 0) {
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
            } else {
                next();
            }
        }
    }
};

module.exports = AuthService;