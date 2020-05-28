const express = require('express');
const graphqlMiddleware = require('express-graphql');

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/todos');
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

const api = express();

const schema = require('./schema');
const resolvers = require('./resolvers');

api.all('/todos', graphqlMiddleware({
    graphiql: true,
    schema,
    rootValue: resolvers
}));

module.exports = api;
