const reservationService = require('../services/reservations');

exports.getReservations = async (req, res) => {
  try {
    const catwayNumber = req.params.id;  // Numéro de catway depuis l'URL
    const reservations = await reservationService.getReservations(catwayNumber);
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const catwayNumber = req.params.id;
    const reservationId = req.params.idReservation;
    const reservation = await reservationService.getReservationById(catwayNumber, reservationId);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const catwayNumber = req.params.id;
    const reservationData = req.body;
    const newReservation = await reservationService.createReservation(catwayNumber, reservationData);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const catwayNumber = req.params.id;
    const reservationId = req.params.idReservation;
    const updateData = req.body;
    const updatedReservation = await reservationService.updateReservation(catwayNumber, reservationId, updateData);
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const catwayNumber = req.params.id;
    const reservationId = req.params.idReservation;
    const deletedReservation = await reservationService.deleteReservation(catwayNumber, reservationId);
    res.status(200).json({ message: 'Réservation supprimée', reservation: deletedReservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};