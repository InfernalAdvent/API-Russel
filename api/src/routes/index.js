const express = require('express');
const router = express.Router();

const userRoute = require('../routes/users');
const loginRoute = require('../routes/login');
const logoutRoute = require('../routes/logout')

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({
    name : process.env.APP_NAME,
    version: '1.0',
    status: 200,
    message: 'Bienvenue sur l\'API du port de plaisance de Russel !'
  });
});

router.use('/users',userRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute)
module.exports = router;
