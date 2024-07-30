const express= require("express");
const app= express();
const mongoose= require("mongoose");
require("dotenv").config()
const PORT= process.env.PORT || 8000
const stuRoute= require("./routes/studentRoutes");
const cors= require("cors");
const bodyparser = require('body-parser')
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/shashank").then(()=>{
    console.log("Data base Connected!!!")
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students", stuRoute)

app.listen(PORT, ()=>{
    console.log(`server run ON ${PORT}`);
})