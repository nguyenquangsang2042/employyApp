var mongoose = require('mongoose');

//Set up default mongoose connection
const EmployeeSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    salary:String,
    position:String
})

mongoose.model("employee",EmployeeSchema)