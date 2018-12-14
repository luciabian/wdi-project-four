/* global api, expect, describe, it, beforeEach */
const Project = require('../../models/project');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let projectId;

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
    password: 'pass'
  }
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

describe('Project DELETE', () => {
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


  it('should delete the project', done => {
    api.delete(`/api/projects/${projectId}`)
      .set('Authorization', `Bearer ${token}`)
      .then(() => Project.find())
      .then(projects => {
        expect(projects.length).to.eq(0);

      });
    done();
  });
});
