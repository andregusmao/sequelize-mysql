const { buildSchema } = require("graphql");

const Schema = buildSchema(`
    type Token {
        token: String
        error: String
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        login(
            email: String!
            password: String!): Token
        users: [User]
        user(id: Int!): User
    }

    type Mutation {
        register(userInput: UserInput): User
        store(userInput: UserInput): User
        update(
            id: Int! 
            userInput: UserInput
        ): User
        destroy(id: Int!): User
    }
`);

module.exports = Schema;