const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @module routes/logout
 */

/**
 * Permet de se déconnecter de l'API
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/', authController.logout);

module.exports = router;