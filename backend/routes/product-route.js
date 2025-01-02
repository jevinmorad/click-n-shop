const express = require('express');
const mongoose = require('mongoose');
const { getall, getById, addProductDetail, updateProductDetail } = require('../controllers/product-controller');

const route = express.Router();

// Route to get all products
route.get('/', getall);

// Route to get a product by ID
route.get('/:id',  getById);

// Route to add a new product
route.post('/', addProductDetail);

// Route to update a product by ID
route.patch('/:id',  updateProductDetail);

module.exports = route;
