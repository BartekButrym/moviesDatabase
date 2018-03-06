const express = require('express');
const router = express.Router();

const actions = require('../controllers/controllers');

router.post('/movies', actions.pull_a_movie);
router.get('/movies', actions.list_all_movies);
router.get('/movies/:id', actions.show_movie);

router.post('/movies/:id/comments', actions.create_a_comment);
router.get('/movies/:id/comments', actions.list_all_comments);
router.get('/comments', actions.list_comments);

module.exports = router;