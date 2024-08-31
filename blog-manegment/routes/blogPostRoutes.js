const express = require('express');
const router = express.Router();
const {
    createBlogPost,
    getBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost
} = require('../controllers/blogPostController');

// Create Blog Post
router.post('/', createBlogPost);

// Get All Blog Posts
router.get('/', getBlogPosts);

// Get Blog Post by ID
router.get('/:id', getBlogPostById);

// Update Blog Post
router.patch('/:id', updateBlogPost);

// Delete Blog Post
router.delete('/:id', deleteBlogPost);

module.exports = router;
