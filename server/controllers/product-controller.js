const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// Get all products
const getAll = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
})

// Get a product by ID
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    res.status(200).json(product);
}) 

// Add a new product
const addProduct = asyncHandler(async (req, res) => {
    const product = new Product(req.body);

    const savedProduct = await product.save();
    if (!savedProduct) {
        res.status(400);
        throw new Error('Failed to add product');
    }

    res.status(201).json(savedProduct);
})

// Update an existing product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    Object.assign(product, req.body);
    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
})

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    res.status(200).json({ message: 'Product deleted successfully' });
})

module.exports = {
    getAll,
    getById,
    addProduct,
    updateProduct,
    deleteProduct,
}