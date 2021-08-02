const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message:"Student and Mentor Assign API creation"})
})

app.listen((port), () => {
    console.log(`server up and running on port ${port}`);
});

mongoose.connect((process.env.MONGODB_URI), {useNewUrlParser: true, useUnifiedTopology:true} , (err) => {
    if(!err){
        console.log("Database connected");
    }else{
        console.log(err);
    }
})