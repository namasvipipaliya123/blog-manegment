const express = require('express');
const router = express.Router();
const {
    createComment,
    getCommentsByBlogPost,
    deleteComment
} = require('../controllers/commentController');

// Create Comment
router.post('/', createComment);

// Get Comments by Blog Post ID
router.get('/:blogPostId', getCommentsByBlogPost);

// Delete Comment
router.delete('/:id', deleteComment);

module.exports = router;
