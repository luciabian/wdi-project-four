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
      location: {
        lat: 6.3690,
        lng: 34.8888
      }
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
