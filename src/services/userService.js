const { User } = require('../models');

const UserService = {
    list: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.json({
                error
            });
        }
    },
    show: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            res.json(user);
        } catch (error) {
            res.json({
                error
            });
        }
    },
    store: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.json({
                error
            });
        }
    },
    update: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        if (user) {
            try {
                await user.update({
                    ...req.body
                });
                res.json(user);
            } catch (error) {
                res.json({
                    error
                });
            }
        } else {
            res.json({
                error: 'User does not exists'
            });
        }
    },
    destroy: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.json(user);
            } else {
                res.json({
                    error: 'User does not exists'
                });
            }
        } catch (error) {
            res.json({
                error
            });
        }
    }
};

module.exports = UserService;