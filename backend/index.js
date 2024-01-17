const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/e-comm');   // mongoose connection with the database 'e-comm'

    const productSchema= new mongoose.Schema({});    // Schema :- we can keep schema empty if we are fetching data or while using GET method

    const product = mongoose.model('product',productSchema);   // Model : Connection between mongodb and node js via schema 

    const data = await product.find();   // finding data via GET method
    console.warn(data);
}

connectDB();

app.listen(5000)