const Project = require('../models/project');

function indexRoute(req, res, next) {
  Project
    .find()
    .exec()
    .then(projects => res.json(projects))
    .catch(next);
}

function showRoute(req, res, next) {
  console.log('Index route');
  Project
    .findById(req.params.id)
    .populate('createdBy name.createdBy createdBy.projectsCreated')
    .exec()
    .then(project => res.json(project))
    .catch(next);
}

function createRoute(req, res, next) {
  Project
    .create(req.body)
    .then(project => res.status(201).json(project))
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('This is req.params.id', req.params.id);
  Project
    .findById(req.params.id)
    .then(project => project.set(req.body))
    .then(project => project.save())
    .then(project => res.json(project))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Project
    .findById(req.params.id)
    .exec()
    .then(project => project.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
