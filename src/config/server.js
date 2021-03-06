const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const port = 3000;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => console.log(`BACKEND is running on port ${ port }`));

module.exports = server;
