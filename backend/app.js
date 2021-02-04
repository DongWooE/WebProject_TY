const express = require('express');
const app = express();
const morgan = require('morgan');
const { IS_DEV } = require('./env');
const router = require('./routes');

app.use(morgan(IS_DEV ? 'dev' : 'combined'));

app.use(router);

module.exports = app