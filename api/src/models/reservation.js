const mongoose = require('mongoose');

const Reservation = new mongoose.Schema({

  catwayNumber: { 
    type: Number,  
    immutable: true,
    required: true,
  },
  clientName: { 
    type: String, 
    trim: true,
    required: true
  },
  boatName: { 
    type: String, 
    trim: true,
    required: true,
  },
  startDate: { 
    type: Date, 
    required: true
  },
  endDate: { 
    type: Date, 
    required: true,
    validate: {
        validator: function(value) {
            return value > this.startDate;
        },
        message: 'La date de fin doit être après la date de début.'
    }
  }

}, {
    timestamps: true
});

module.exports = mongoose.model('Reservation', Reservation);