const express = require('express');
const app = express();
const morgan = require('morgan');
const { IS_DEV } = require('./env');


app.use(morgan(IS_DEV ? 'dev' : 'combined'));

app.use('/test', (req,res) => {
    res.json('hello?');
});


module.exports = app