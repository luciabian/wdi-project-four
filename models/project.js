const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  location: {
    lat: { type: Number },
    lng: { type: Number }
  }
});

module.exports = mongoose.model('Project', projectSchema);
