const express = require('express');
const connectDB = require('./config/db');
const app = express()
const productRoutes = require('./routes/product-route');
const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.json())


app.use('/api/products', productRoutes); 



app.listen(PORT,()=>{
    console.log("Server Started");    
})