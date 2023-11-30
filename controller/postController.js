const mongoose = require('mongoose')
const express = require('express')
const bookServices = require('../services/postServices')
const Blog = require('../model/Blog');

exports.createPost = async (req,res) => {
    const inputData = req.body;
    console.log('inputData',inputData);
    const details = await postServices.createPost(inputData);
    console.log('details', details);
}

exports.getPost = async (req,res) => {
    const data = await postServices.getPost();
    console.log('data',data);
    res.status(200).json({data: data})
}

exports.getPostById = async (req,res) => {
    const data =await postServices.getPostById();
    console.log('data',data);
    res.status(200).json({data: data})
}

exports.updatePost = async (req,res) => {
    try {
        const updatedItem = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(updatedItem);
    }
    catch (err) {
        res.status(400).json({ message: err.message});
    }
}

exports.deletePost = async (req,res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({message: 'Item deleted'});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}



exports.pagination = async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        const totalItems = await Book.countDocuments().exec();
        results.totalItems = totalItems;

        if (endIndex < totalItems)
        {
            results.next = {
                page: page+1,
                limit: limit
            };
        }

        if (startIndex > 0)
        {
            results.previous = {
                page: page-1,
                limit: limit
            };
        }

        results.items = await Book.find().limit(limit).skip(startIndex).exec();
        res.json(results);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}