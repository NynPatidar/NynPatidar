const mongoose = require("mongoose");

const regSchema = new mongoose.Schema({
   firstname:{
      type:String,
      required:true
   },
   lastname:{
      type:String,
      required:true
      
   },
   mobile_no:{
    type:Number,
    required:true,
    unique:true
   },
   email:{
      type:String,
      required:true,
      unique:true
   },
   address:{
      type:String,
      required:true
   },
   loginid:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   },
   confirmpassword:{
      type:String,
      required:true
   }
})

const Register = new mongoose.model("Register", regSchema);
module.exports = Register;
