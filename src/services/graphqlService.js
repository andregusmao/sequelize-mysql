const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { secret } = require('../../config');

const GraphQLService = {
    register: async ({ userInput }) => {
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return await User.create(userInput);
        }

        return { error: 'User already exists' };
    },
    login: async ({ email, password }) => {
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (user) {
            if (user.password === password) {
                const token = jwt.sign(
                    { email },
                    secret,
                    {
                        algorithm: 'HS256',
                        expiresIn: 3600
                    });
                return { token };
            }
        }

        return { error: 'Invalid username or password' };
    },
    users: async () => await User.findAll(),
    user: async ({ id }) => await User.findByPk(id),
    store: async ({ userInput }) => await User.create(userInput),
    update: async ({ id, userInput }) => {
        const user = await User.findByPk(id);

        if (user) {
            return await user.update(userInput)
        }

        return null;
    },
    destroy: async ({ id }) => {
        const user = await User.findByPk(id);

        if (user) {
            return await user.destroy();
        }

        return null;
    }
};

module.exports = GraphQLService;