const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @module routes/login
 */

/**
 * Permet de se connecter à l'API
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.post('/', authController.login);

module.exports = router;