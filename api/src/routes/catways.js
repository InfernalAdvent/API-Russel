const express = require('express');
const router = express.Router();
const catwaysController = require('../controllers/catwaysController');
const reservationsController = require('../controllers/reservationsController')
const reservationsRouter = require('./reservations');

/**
 * @module routes/catways
 */

/**
 * Récupère tous les catways
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/', catwaysController.getCatways);
/**
 * Récupère toutes les réservations de catways
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/reservations', reservationsController.getAllReservations);
/**
 * Récupère un catway par son numéro (catwayNumber)
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/:id', catwaysController.getCatwayByCatwayNumber);
/**
 * Ajoute un nouveau catway
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.post('/', catwaysController.addCatways);
/**
 * Modifie l'état d'un catway
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.put('/:id', catwaysController.updateCatwayState);
/**
 * Supprime un catway
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.delete('/:id', catwaysController.deleteCatway);

router.use('/:id/reservations', reservationsRouter);

module.exports = router;