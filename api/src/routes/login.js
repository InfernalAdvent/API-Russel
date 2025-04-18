const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @module routes/login
 */

/**
 * @name Login
 * @route POST /login
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Connexion de l'utilisateur
 */
router.post('/', authController.login);

module.exports = router;