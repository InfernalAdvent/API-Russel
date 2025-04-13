const Reservation = require('../models/reservation');

exports.getReservations = async (catwayNumber) => {
  try {
    const reservations = await Reservation.find({ catwayNumber });
    return reservations;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des réservations: ${error.message}`);
  }
};


exports.getReservationById = async (catwayNumber, reservationId) => {
  try {
    const reservation = await Reservation.findOne({ catwayNumber, _id: reservationId });
    if (!reservation) {
      throw new Error('Réservation non trouvée');
    }
    return reservation;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la réservation: ${error.message}`);
  }
};


exports.createReservation = async (catwayNumber, reservationData) => {
  try {
    const reservation = new Reservation({
      ...reservationData,
      catwayNumber
    });
    await reservation.save();
    return reservation;
  } catch (error) {
    throw new Error(`Erreur lors de la création de la réservation: ${error.message}`);
  }
};


exports.updateReservation = async (catwayNumber, reservationId, updateData) => {
  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { catwayNumber, _id: reservationId },
      updateData,
      { new: true }
    );
    if (!updatedReservation) {
      throw new Error('Réservation non trouvée');
    }
    return updatedReservation;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de la réservation: ${error.message}`);
  }
};


exports.deleteReservation = async (catwayNumber, reservationId) => {
  try {
    const deletedReservation = await Reservation.findOneAndDelete({ catwayNumber, _id: reservationId });
    if (!deletedReservation) {
      throw new Error('Réservation non trouvée');
    }
    return deletedReservation;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression de la réservation: ${error.message}`);
  }
};