const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const mongoUri = "mongodb+srv://dami:<piD7VjOdxGTn4moG>@cluster0.5hawu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get('/',(req,res)=>{
    res.send("welcome to node js")
})

app.listen(3000,()=>{
    console.log("server running")
})

password = piD7VjOdxGTn4moG