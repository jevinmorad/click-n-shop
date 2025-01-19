const express = require('express');
const connectDB = require('./config/db');
const app = express()
const userRoutes = require('./routes/user-route')
const productRoutes = require('./routes/product-route');
const route = require('./routes/user-route');
const { errorHandler } = require('./middleware/error-middleware');
const PORT = process.env.PORT || 3000;

connectDB(); // Connect with database

// Middleware
app.use(express.json()) // Parse json data
app.use(errorHandler) // Error handling 

// Routes
app.use('/user', userRoutes);
app.use('/products', productRoutes); 

app.listen(PORT,()=>{
    console.log("Server Started");    
})