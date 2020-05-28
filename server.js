const express = require('express');
const server = express();
const port = 4939;

server.get('/', (_, res) => {
    res.send('Hello');
});

server.listen(port, () => {
    console.log(`Express is listening. http://localhost:${port}/`);
});
