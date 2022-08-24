const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(() => console.log('MongoDB connection Successful.'))
.catch((error) => console.error("MongoDB connection failed:", error.message));