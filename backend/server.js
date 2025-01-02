const express = require('express');
const connectDB = require('./config/db');
const app = express()

connectDB()

app.use(express.json())

app.listen(3000,()=>{
    console.log("Server Started");    
})