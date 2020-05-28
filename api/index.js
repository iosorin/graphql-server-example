const express = require('express');
const graphqlMiddleware = require('express-graphql');
const schema = require('./schema');

const api = express();

const resolvers = require('./resolvers');

api.all('/todos', graphqlMiddleware({
    graphiql: true,
    schema,
    rootValue: resolvers
}));

module.exports = api;
