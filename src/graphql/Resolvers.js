const jwt = require('jsonwebtoken');
const { User } = require('../models');
const Resolvers = {
    login: async ({ email, password }) => {
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
                return { token };
            } else {
                return { error: 'Invalid username or password' }
            }
        } else {
            return { error: 'User does not exists' }
        }
    },
    users: async () => {
        return await User.findAll();
    },
    user: async ({ id }) => {
        return await User.findByPk(id);
    },
    register: async ({ userInput }) => {
        return await User.create(userInput);
    },
    store: async ({ userInput }) => {
        return await User.create(userInput);
    },
    update: async ({
        id,
        userInput
    }) => {
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

        return null
    }
};

module.exports = Resolvers;