/* global describe, it, expect, api, beforeEach */

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

describe('Projects INDEX', () => {

  beforeEach(done => {
    Project.remove({})
      .then(() => Project.create(projectData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/projects')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/projects')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/projects')
      .end((err, res) => {
        res.body.forEach(item => expect(item).to.be.an('object'));
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/projects')
      .end((err, res) => {
        res.body.forEach(project => {
          const dataItem = projectData.find(item => item.name === project.name);
          expect(project.name).to.eq(dataItem.name);
          expect(project.country).to.eq(dataItem.country);
          expect(project.description).to.eq(dataItem.description);
        });
        done();
      });
  });

});
