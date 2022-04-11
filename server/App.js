const express= require('express')
const app =express()
const bodyparser= require('body-parser')
const mongoose=require('mongoose')

const password=162293
const MongoDBuri="mongodb+srv://sangnq:"+password+"@cluster0.m0dxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

require('./Employyee')

const Employee=mongoose.model("employee")

mongoose.connect(MongoDBuri)
mongoose.connection.on("connected",()=>{
    console.log("connect mongodb success")
}) //=> check connect mongodb success

mongoose.connection.on("error",(err)=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send("welcomto node js")
})
app.listen(3000,()=>{
    console.log("server running");
})