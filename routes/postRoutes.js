const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const postController = require('../controller/postController');


app.use('POST/api/posts', postController.createPost);
app.use('GET/api/posts', postController.getPost);
app.use('GET/api/posts/:id', postController.getPostById);
app.patch('PUT/api/posts/:id', postController.updatePost);
app.delete('DELETE/api/posts/:id', postController.deletePost);

app.use('/blog/paginate', postController.pagination);


app.use("",router);
module.exports = app