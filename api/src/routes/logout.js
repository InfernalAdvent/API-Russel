const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @module routes/logout
 */

/**
 * @name Logout
 * @route GET /logout
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Déconnexion de l'utilisateur

 */
router.get('/', authController.logout);

module.exports = router;