const BlogPost = require('../models/BlogPost');

// Create a Blog Post
const createBlogPost = async (req, res) => {
    const { title, content, author } = req.body;

    const newPost = new BlogPost({ title, content, author });
    const post = await newPost.save();
    res.json(post);
};

// Get All Blog Posts
const getBlogPosts = async (req, res) => {
    const posts = await BlogPost.find().populate('author', ['username']);
    res.json(posts);
};

// Get Blog Post by ID
const getBlogPostById = async (req, res) => {
    const post = await BlogPost.findById(req.params.id).populate('author', ['username']);
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
};

// Update Blog Post
const updateBlogPost = async (req, res) => {
    const { title, content } = req.body;
    const post = await BlogPost.findById(req.params.id);
    
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
};

// Delete Blog Post
const deleteBlogPost = async (req, res) => {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
};

module.exports = { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost };
