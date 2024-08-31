const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost',
        required: true
    },
    createdId: {
        type: Date,
        default: Date.now
    }

});

const Comment = new mongoose.Schema('Comment', commentSchema);
module.exports = Comment;