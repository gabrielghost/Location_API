const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String},
  lat: { type: String },
  lng: { type: String },
  description: { type: String },
  notes: { type: String }
},{
  timestamps: true
});


module.exports = mongoose.model('Location', locationSchema);
