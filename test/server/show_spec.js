/* global api, expect, describe, it, beforeEach */

const Project = require('../../models/project');
const userIds = [
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];
const projectData = [
  {
    name: 'test1',
    country: 'test1',
    image: 'test1',
    lat: 21513,
    lng: 12543,
    countryInfo: 'test1',
    description: 'test1',
    createdBy: userIds[0]
  },
  {
    name: 'test2',
    country: 'test2',
    image: 'test2',
    lat: 21514,
    lng: 12544,
    countryInfo: 'test2',
    description: 'test2',
    createdBy: userIds[0]
  },
  {
    name: 'test3',
    country: 'test3',
    image: 'test3',
    lat: 21515,
    lng: 12545,
    countryInfo: 'test3',
    description: 'test3',
    createdBy: userIds[0]
  }
];

let projectId;

describe('Events SHOW', () => {

  beforeEach(done => {
    Project.remove({})
      .then(() => Project.create(projectData))
      .then(project => {
        projectId = project[0]._id;
        console.log(projectId);
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        console.log(res.status);
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(projectData[0].name);
        expect(res.body.country).to.eq(projectData[0].country);
        expect(res.body.description).to.eq(projectData[0].description);
        done();
      });
  });
});
