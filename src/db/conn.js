const mongoose = require("mongoose");

const db = "mongodb+srv://root1:Nyn2104@cluster0.gkiedah.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Mongodb connection successful!");
}).catch((err) => {
    console.log("Mongodb connection failed!");
    console.log(err);
});
