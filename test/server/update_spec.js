/* global api, expect, describe, it, beforeEach */
const Project = require('../../models/project');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let projectId;

const userIds = [
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Lucia',
    email: 'lu@lu',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
];

const projectData = [
  {
    name: 'test',
    country: 'test',
    image: 'test',
    lat: 21513,
    lng: 12543,
    countryInfo: 'test',
    description: 'test',
    createdBy: userIds[0]
  }
];

const updateData = [
  {
    name: 'updated test',
    country: 'updated test',
    image: 'updated test',
    lat: 24513,
    lng: 14543,
    countryInfo: 'updated test',
    description: 'updated test',
    createdBy: userIds[0]
  }
];

let token;

describe('Projects UPDATE', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Project.remove({});
      })
      .then(() => Project.create(projectData))
      .then(project => {
        projectId = project[0]._id;
        done();
      });
  });


  it('should return a 200 with a token', done => {
    api.put(`/api/projects/${projectId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updateData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
      });
    done();
  });

  it('should return an object', done => {
    api.put(`/api/projects/${projectId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updateData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

});
