const router = require('express').Router();
const {
  getUsers,
  addUser,
  getUserByUsername,
  getArticlesByUsername,
} = require('../controllers/users-controller');
const {
  send404,
  send405,
} = require('../errors/index');

router.route('/')
  .get(getUsers)
  .post(addUser)
  .all(send405);
router.route('/:username')
  .get(getUserByUsername)
  .all(send405);
router.route('/:username/articles')
  .get(getArticlesByUsername)
  .all(send405);
router.use('/*', send404);

module.exports = router;
