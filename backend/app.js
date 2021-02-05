const express = require('express');
const { IS_DEV } = require('./env');
const morgan = require('morgan');
const router = require('./routes');
const app = express();


app.use(morgan(IS_DEV ? 'dev' : 'combined'));

app.use(express.json());    //req.body를 사용하기위한 express의 body-parser!!!

app.use(router);




module.exports = app;