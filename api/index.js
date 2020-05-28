const express = require('express');
const api = express();

api.all('/graphql', (_, res) => {
    res.send('GraphQL API');
});

module.exports = api;
