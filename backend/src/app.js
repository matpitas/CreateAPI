const express = require('express');
const cors = require('cors')
const router = require('./router');

const app = express();

// Faz com que a API consiga trabalhar com dados em JSON
app.use(express.json())
app.use(cors())
app.use(router);

module.exports = app;