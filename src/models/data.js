// const mongoose = require("mongoose");

// const dataSchema = new mongoose.Schema({
//     firstname:String,
//     lastname:String,
//     mobile_no:Number,
//     email:String,
//     address:String,
//     loginid:String,
//     password:String
// })
// const Data = new mongoose.model("Register", dataSchema);
// module.exports = Data;

function showUser(str) {
         if(str !== "") {
            $.ajax({
                url: "/",
                mathod: "POST",
                contentType: "application/json",
                data: JSON.stringify({choice: str}),
                success: function(result) {
                    $("txt-hint").html(result.html);
                } 
            })
         }
}