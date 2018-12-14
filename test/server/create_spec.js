/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
const Project = require('../../models/project');

const userIds = [
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const projectData = [
  {
    name: 'test',
    country: 'test',
    image: 'test',
    lat: 21514,
    lng: 12543,
    countryInfo: 'test',
    description: 'test',
    createdBy: userIds[0]
  }
];


let token;

describe('Projects CREATE', () => {

  beforeEach(done => {
    Project.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });


  it('should return an object', done => {
    api.post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send(projectData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send(projectData)
      .end((err, res) => {
        expect(res.body.name).to.eq(projectData.name);
        expect(res.body.country).to.eq(projectData.country);
        expect(res.body.description).to.eq(projectData.description);
        expect(res.body.countryInfo).to.eq(projectData.countryInfo);
        done();
      });
  });
});
