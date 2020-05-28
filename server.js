const express = require('express');
const server = express();
const port = 4939;

const api = require('./api');

server.get('/', (_, res) => {
    res.send('Hello');
});

server.use('/api', api);

server.listen(port, () => {
    console.log(`Express is listening. http://localhost:${port}/`);
});
