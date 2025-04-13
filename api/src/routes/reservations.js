const express = require('express');
const router = express.Router({ mergeParams: true }); //Pour accéder à :id du catway
const reservationsController = require('../controllers/reservationsController');

router.get('/', reservationsController.getReservations);
router.get('/:idReservation', reservationsController.getReservationById);
router.post('/', reservationsController.createReservation);
router.put('/:idReservation', reservationsController.updateReservation);
router.delete('/:idReservation', reservationsController.deleteReservation);

module.exports = router;