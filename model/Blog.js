const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type:String, required: true, maxlength: 255},
    content: {type:String, required: true, maxlength: 5000},
    author: {type:String, required: true},
    tags: {type:{}},
    comments: {type:{}},
})

const commentSchema = new mongoose.Schema({
    Content: {type:String, required: true, maxlength: 1000},
    Author: {type:String, required: true},
    createdAt: {type: Date}
})

module.exports = mongoose.model('postSchema', postSchema);
module.exports = mongoose.model('commentSchema', commentSchema);
