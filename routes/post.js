const express = require('express');
const { createPost, getPost } = require('../controllers/post');
const { createPostValidator } = require('../validator');

const router = express.Router();

router.get('/', getPost);
router.post('/post', createPostValidator, createPost);

module.exports = router;

