const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(() => {
    console.log("Mongodb connection successful!");
}).catch((e) => {
    console.log("Mongodb connection failed!");
})