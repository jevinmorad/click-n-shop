const express = require('express');
const mongoose = require('mongoose');
const { getall, getById, addProductDetail, updateProductDetail, deleteProductDetail } = require('../controllers/product-controller');

const route = express.Router();

route.get('/', getall)

route.get('/:id',  getById)

route.post('/', addProductDetail)

route.patch('/:id',  updateProductDetail)

route.delete('/:id',deleteProductDetail)

module.exports = route;
