const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mongodb = require('../api/db/mongo');
const indexRouter = require('./src/routes/index');
const loginRouter = require('./src/routes/login');
const logoutRouter = require('./src/routes/logout');


mongodb.initCLientDbConnection();

const app = express();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

module.exports = app;
