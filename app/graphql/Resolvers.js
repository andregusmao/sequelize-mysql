const { User } = require('../models');
const Resolvers = {
    users: async () => {
        let users = await User.findAll();
        let usersFormatted = users.map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            password: u.password,
            createAt: u.createdAt.toString(),
            updateAt: u.updatedAt.toString()
        }));
        return usersFormatted;
    },
    user: async ({ id }) => {
        return await User.findByPk(id);
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