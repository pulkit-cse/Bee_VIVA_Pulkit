const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const commentsController = require('../controller/commentsController');


app.use('POST/api/create-comment', commentsController.createComment);
app.use('GET/api/get-comment', commentsController.getComment);
app.patch('PUT/api/update-comment/:id', commentsController.updateComment);
app.delete('DELETE/api/delete-comment/:id', commentsController.deleteComment);

app.use('GET/api/paginate', commentsController.pagination);


app.use("",router);
module.exports = app