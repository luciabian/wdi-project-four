const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model('Project', projectSchema);
