const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { User } = require('../models/user');

const app = express();

const schema = gql`
    type Query {
        users: [User]
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }
`;
const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll();
        }
    }
};

const GraphQLService = {
    graphql: async (req, res) => {
        server.executeOperation()
    }
};

module.exports = GraphQLService;