const router = require('express').Router();
const projects = require('../controllers/projects');
const users = require('../controllers/user');
const messages = require('../controllers/messages');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index)
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(projects.update)
  .delete(secureRoute, projects.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/profile/:id')
  .get(users.showRoute);

router.route('/messages')
  .get(secureRoute, messages.index)
  .post(secureRoute, messages.create);

router.route('/messages/:id')
  .delete(messages.delete);


module.exports = router;
