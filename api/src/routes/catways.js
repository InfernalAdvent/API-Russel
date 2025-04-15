const express = require('express');
const router = express.Router();
const catwaysController = require('../controllers/catwaysController');
const reservationsController = require('../controllers/reservationsController');
const reservationsRouter = require('./reservations');

/**
 * @module routes/catways
 */

/**
 * @name Get Catways
 * @route GET /catways
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Liste des catways

 */
router.get('/', catwaysController.getCatways);

/**
 * @name Get Catways Reservations
 * @route GET /catways/reservations
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Liste des réservations (ajoutées ici car les autres requêtes des réservations sont une sous ressource des catways)
 */
router.get('/reservations', reservationsController.getAllReservations);

/**
 * @name Get Catway by Number
 * @route GET /catways/:id
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Le catway sélectionné par son numéro

 */
router.get('/:id', catwaysController.getCatwayByCatwayNumber);

/**
 * @name Add Catway
 * @route POST /catways
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Le catway ajouté

 */
router.post('/', catwaysController.addCatways);

/**
 * @name Update Catway State
 * @route PUT /catways/:id
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Le catway modifié

 */
router.put('/:id', catwaysController.updateCatwayState);

/**
 * @name Delete Catway
 * @route DELETE /catways/:id
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Le catway supprimé

 */
router.delete('/:id', catwaysController.deleteCatway);

router.use('/:id/reservations', reservationsRouter);

module.exports = router;