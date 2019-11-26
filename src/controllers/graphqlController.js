const expressGraphql = require("express-graphql");
const GraphQL = require("../models/graphql");
const GraphQLService = require("../services/graphqlService");

const GraphQLController = expressGraphql({
    schema: GraphQL,
    rootValue: GraphQLService,
    graphiql: true
});

module.exports = { GraphQLController };
