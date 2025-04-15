const express = require('express');
const router = express.Router({ mergeParams: true }); //Pour accéder à :id du catway
const reservationsController = require('../controllers/reservationsController');

/**
 * @module routes/reservations
 */

/**
 * @name Get Reservations
 * @route GET /catways/:id/reservations
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Les réservations du catway sélectionné 
 */
router.get('/', reservationsController.getReservations);

/**
 * @name Get Reservation by ID
 * @route GET /catways/:id/reservations/:idReservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - La réservation sélectionnée 
 */
router.get('/:idReservation', reservationsController.getReservationById);

/**
 * @name Create Reservation
 * @route POST /catways/:id/reservations
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - La réservation ajoutée
 */
router.post('/', reservationsController.createReservation);

/**
 * @name Update Reservation
 * @route PUT /catways/:id/reservations/:idReservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - La réservation modifiée
 */
router.put('/:idReservation', reservationsController.updateReservation);

/**
 * @name Delete Reservation
 * @route DELETE /catways/:id/reservations/:idReservation
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - La réservation supprimée
 */
router.delete('/:idReservation', reservationsController.deleteReservation);

module.exports = router;