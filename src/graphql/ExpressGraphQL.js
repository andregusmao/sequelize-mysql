const expressGraphql = require("express-graphql");
const Schema = require("./Schema");
const Resolvers = require("./Resolvers");

const ExpressGraphQL = expressGraphql({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: true
});

module.exports = ExpressGraphQL;
