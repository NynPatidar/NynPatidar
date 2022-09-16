const mongoose = require("mongoose");
const validator = require("validator");

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
    unique:true,
   },
   email:{
      type:String,
      required:true,
      unique:[true, "This email is already registered"],
      validate(value) {
         if(!validator.isEmail(value)) {
            throw new Error("invalid email");
         }
      }
   },
   address:{
      city:{
         type:String,
         required:true
      },
      state:{
         type:String,
         required:true
      },
      country:{
         type:String,
         required:true
      },
   },
   loginid:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true,
   },
   confirmpassword:{
      type:String,
      required:true
   },
   date: {
      type: Date,
      default: Date.now
   }
})

const Register = new mongoose.model("Register", regSchema);
module.exports = Register;
