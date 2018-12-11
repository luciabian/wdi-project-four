const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');
const Message = require('../models/message');

const userIds = [
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3',
  '5be9860fcb16d525543ceda4'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Lucia',
    email: 'lu@lu',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[1],
    username: 'David',
    email: 'd@d',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
];

const messageData = [
  {
    from: userIds[0],
    to: userIds[1],
    content: 'Hello!'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: 'Hi!'
  }
];

const projectData = [
  {
    name: 'Animal Welfare',
    country: 'Tanzania',
    image: 'https://isafari.s3.amazonaws.com/system/feature/38/sidebar_tanzania-wildlife.jpg',
    lat: 6.1630,
    lng: 35.7516,
    createdBy: userIds[0]
  },
  {
    name: 'Childcare',
    country: 'Philippines',
    image: 'https://ivhq.imgix.net/images/gallery/volunteer-in-philippines/ivhq-philippines-kindergarten-volunteer-teaching.jpg?w=1200&q=85',
    lat: 12.8797,
    lng: 121.7740,
    createdBy: userIds[1]
  }
];

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Project.create(projectData)
    .then(projects => {
      console.log(`${projects.length} project created`);
      return User.create(userData);
    })
    .then(users => {
      console.log(`${users.length} users created`);
      return Message.create(messageData);
    })
    .then(messages => {
      console.log(`${messages.length} messages created`);
      mongoose.connection.close();
    });
});
