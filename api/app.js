const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mongodb = require('../api/db/mongo');
const loginRouter = require('./src/routes/login');
const logoutRouter = require('./src/routes/logout');
const catwaysRouter = require('./src/routes/catways');
const meRouter = require('./src/routes/me');
const checkAuth = require('./src/middlewares/authMiddleware');  // Assure-toi d'importer ton middleware

mongodb.initCLientDbConnection();

const app = express();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*',
    credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/catways', catwaysRouter);
app.use('/me', meRouter);

// Route protégée pour le tableau de bord
app.use('/dashboard', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
  });

module.exports = app;
