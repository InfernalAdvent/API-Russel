const mongoose = require('mongoose');

const Catway = new mongoose.Schema({

  catwayNumber: { 
    type: Number,  
    trim: true,
    immutable: true,
    required: true,
    unique: true
  },
  catwayType: { 
    type: String, 
    trim: true,
    enum: ['short', 'long'],
    immutable: true,
    required: true
  },
  catwayState: { 
    type: String, 
    trim: true,
    required: true
  }}, {
    timestamps: true
});

module.exports = mongoose.model('Catway', Catway);