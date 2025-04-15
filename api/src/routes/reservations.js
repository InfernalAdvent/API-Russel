const express = require('express');
const router = express.Router({ mergeParams: true }); //Pour accéder à :id du catway
const reservationsController = require('../controllers/reservationsController');

/**
 * @module routes/reservations
 */

/**
 * Récupère les réservations du catway sélectionné
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/', reservationsController.getReservations);
/**
 * Récupère une réservation avec son id 
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/:idReservation', reservationsController.getReservationById);
/**
 * Ajoute une nouvelle réservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.post('/', reservationsController.createReservation);
/**
 * Modifie la réservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.put('/:idReservation', reservationsController.updateReservation);
/**
 * Supprime la réservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.delete('/:idReservation', reservationsController.deleteReservation);

module.exports = router;