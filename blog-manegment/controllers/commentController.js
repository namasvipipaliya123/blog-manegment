const Comment = require('../models/Comment');

// Create a Comment
const createComment = async (req, res) => {
    const { content, author, blogPost } = req.body;

    const newComment = new Comment({ content, author, blogPost });
    const comment = await newComment.save();
    res.json(comment);
};

// Get All Comments for a Blog Post
const getCommentsByBlogPost = async (req, res) => {
    const comments = await Comment.find({ blogPost: req.params.blogPostId }).populate('author', ['username']);
    res.json(comments);
};

// Delete Comment
const deleteComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
        return res.status(404).json({ msg: 'Comment not found' });
    }

    await comment.remove();
    res.json({ msg: 'Comment removed' });
};

module.exports = { createComment, getCommentsByBlogPost, deleteComment };
