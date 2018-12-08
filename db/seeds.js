const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');

const userData = [{
  username: 'Lucia',
  email: 'lu@lu',
  password: 'pass',
  passwordConfirmation: 'pass'
}];

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Project.create([
    {
      name: 'Animal Welfare',
      country: 'Tanzania',
      image: 'https://isafari.s3.amazonaws.com/system/feature/38/sidebar_tanzania-wildlife.jpg',
      lat: 6.1630,
      lng: 35.7516
    },
    {
      name: 'Childcare',
      country: 'Philippines',
      image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-philippines/ivhq-philippines-kindergarten-volunteer-teaching.jpg?w=1200&q=85',
      lat: 12.8797,
      lng: 121.7740
    }
  ])
    .then(projects => {
      console.log(`${projects.length} project created`);
      User
        .create(userData)
        .then(users => {
          console.log(`${users.length} users created`);
        })
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
    });
});
