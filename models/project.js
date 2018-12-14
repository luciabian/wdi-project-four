const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  lat: Number,
  lng: Number,
  countryInfo: String,
  description: String,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Project', projectSchema);
