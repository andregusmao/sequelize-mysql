const { User } = require('../models');

const UserService = {
    list: async (_, res) => {
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
        try {
            const user = await User.findByPk(req.params.id);
            await user.update({
                ...req.body
            });
            res.json(user);
        } catch (error) {
            res.json({
                error
            });
        }
    },
    destroy: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            await user.destroy();
            res.json(user);
        } catch (error) {
            res.json({
                error
            });
        }
    }
};

module.exports = UserService;