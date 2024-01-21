const express = require('express');
const cors = require('cors')
const app = express();
require('./db/config')
const User = require('./db/User')

app.use(express.json())
app.use(cors());
 
// const connectDB = async ()=>{
//        // mongoose connection with the database 'e-comm'

//     const productSchema= new mongoose.Schema({});    // Schema :- we can keep schema empty if we are fetching data or while using GET method

//     const product = mongoose.model('product',productSchema);   // Model : Connection between mongodb and node js via schema 

//     const data = await product.find();   // finding data via GET method
//     console.warn(data);
// }

// connectDB();



// METHOD 1 

// app.post("/register",async(req,res)=>{
// let data = new User(req.body);
// let result =  await data.save();
// res.send(result)
// })


// METHOD 2
app.post("/register",(req,res)=>{
    res.send(req.body)
})

app.listen(5005)