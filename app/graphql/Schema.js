const { buildSchema } = require("graphql");

const Schema = buildSchema(`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        createAt: String
        updateAt: String
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        users: [User]
        user(id: Int!): User
    }

    type Mutation {
        store(userInput: UserInput): User
        update(
            id: Int! 
            userInput: UserInput
        ): User
        destroy(id: Int!): User
    }
`);

module.exports = Schema;