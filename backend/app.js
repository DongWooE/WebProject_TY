const express = require('express');
const { IS_DEV } = require('./env');
const morgan = require('morgan');

const app = express();


app.use(morgan(IS_DEV ? 'dev' : 'combined'));
app.use('/test', (req,res) => { res.json('222')});

module.exports = app;