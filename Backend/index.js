const express = require('express');

const app = express();

app.use(express.JSON());

// body{
// title: string,
// description: string}

app.post("/todo", function(req,res){

});

app.get("todo", function(req,res){

})

app.put("/completed", function(req,res){

})

