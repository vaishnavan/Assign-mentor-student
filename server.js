const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message:"Student and Mentor Assign API creation"})
})

app.listen((port), () => {
    console.log(`server up and running on port ${port}`);
});