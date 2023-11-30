const mongoose = require('mongoose')
const Blog = require('../model/Blog')

exports.createPost = async (data)=>{
    return await Blog.create(data)
}

exports.getPost = async ()=>{
    return await Blog.find()
}

exports.getPostById = async ()=>{
    return await Blog.findById()
}

// exports.findAndUpdateBook = async ()=>{
//     return await Book.findByIdAndUpdate(req.params.id,req.body, {new: true});
// }