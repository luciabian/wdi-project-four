const router = require('express').Router();
const projects = require('../controllers/projects');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index)
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(projects.update)
  .delete(projects.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;