const router = require('express').Router();
const {
  getArticles,
  getArticlesById,
  patchArticleById,
  deleteArticleById,
  getCommentsByArticleId,
  addCommentByArticleId,
  patchArticleCommentVoteByCommentId,
  deleteArticleCommentByCommentId,
} = require('../controllers/articles-controller');
const {
  send404,
  send405,
} = require('../errors/index');

router.route('/')
  .get(getArticles)
  .all(send405);
router.route('/:article_id')
  .get(getArticlesById)
  .patch(patchArticleById)
  .delete(deleteArticleById)
  .all(send405);
router.route('/:article_id/comments')
  .get(getCommentsByArticleId)
  .post(addCommentByArticleId)
  .all(send405);
router.route('/:article_id/comments/:comment_id')
  .patch(patchArticleCommentVoteByCommentId)
  .delete(deleteArticleCommentByCommentId)
  .all(send405);
router.use('/*', send404);

module.exports = router;
