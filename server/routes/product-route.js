const express = require('express');
const mongoose = require('mongoose');
const { getAll, getById, addProduct, updateProduct, deleteProduct, } = require('../controllers/product-controller');

const route = express.Router();

route.get('/', getAll)

route.get('/:id', getById)

route.post('/', addProduct)

route.patch('/:id', updateProduct)

route.delete('/:id', deleteProduct)

module.exports = route;
