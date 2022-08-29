const mongoose = require("mongoose");
const validator = require("validator");
// const passwordValidator = require("password-validator");

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
    minlength:10,
    maxlength:10
   //  validate(value) {
   //    if(!validator.isMobilePhone(value)) {
   //       throw new Error("invalid Mobile no");
   //    }
   // }
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
      type:String,
      required:true
   },
   loginid:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true,
      isStrongPassword: {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
         } 
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
