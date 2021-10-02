//const { listItemIconClasses } = require("@mui/material");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express,json())
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",{
    useNewUrlParser : true,
});
app.listen(3000, ()=>{
    console.log("server running on port 3001");
});
