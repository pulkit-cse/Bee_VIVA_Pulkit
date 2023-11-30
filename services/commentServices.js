const mongoose = require('mongoose')
const Blog = require('../model/Blog')

exports.createComment = async (data)=>{
    return await Blog.create(data)
}

exports.getComment = async ()=>{
    return await Blog.find()
}


// exports.findAndUpdateBook = async ()=>{
//     return await Book.findByIdAndUpdate(req.params.id,req.body, {new: true});
// }