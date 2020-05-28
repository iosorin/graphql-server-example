const express = require('express');
const graphqlMiddleware = require('express-graphql');
const schema = require('./schema');

const resolvers = require('./resolvers');
const api = express();

api.all('/todos', graphqlMiddleware({
    graphiql: true,
    schema,
    rootValue: resolvers
}));

module.exports = api;
