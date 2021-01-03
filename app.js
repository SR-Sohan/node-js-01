const express = require('express');
const logger = require('morgan');
require('dotenv');
const mongoose = require('./db/db')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',productsRouter);

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Server is running ${port}`);
})


module.exports = app;
