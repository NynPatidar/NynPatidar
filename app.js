const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const hbs = require("hbs");
let nayan=[]
const http = require("http");
const server = http.createServer(app);
const {Server}=require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;


require("./src/db/conn");
const Register = require("./src/models/registers");
const { json } = require("express");

// app.use(express.static(path.join(__dirname, "../")));
const view_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


const static_path = path.join(__dirname,"/public");
app.use(express.static(static_path));

// app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", view_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("register");
});

app.get("/connection", (req, res) => {
    res.render("connection");
});

app.get("/login", (req, res) => {
    res.render("login");
});

// app.get("/data", async (req, res) => {
// const getDocument = async () => {
//        try{ 
//         const details = await Register.find();
//             res.status(201).send(details);
//         }catch(err) {
//             console.log(err);
//         }
//     }; 
//         getDocument();   
// });


app.post("/register", async (req, res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword) {

            const registerDetails = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                mobile_no: req.body.mobile_no,
                email: req.body.email,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                loginid: req.body.loginid,
                password: password,
                confirmpassword: cpassword,
                date: req.body.date
             });

           const registered = await registerDetails.save();
           res.status(201).render("register");
           

        }else {
            res.send("Password not matching");
        
        };

    }catch(error) {
        res.status(400).send(error);
    };
});

app.post("/login", async (req, res) => {
    const loginid = req.body.loginid;
    try {
        loginid;
            const password = req.body.password;

            const userlog = await Register.findOne({loginid:loginid});
           
            if(userlog.password === password) {
                let mydata={
                firstname:userlog.firstname,
                lastname:userlog.lastname,
                mobile_no:userlog.mobile_no,
                email: userlog.email,
                city: userlog.city,
                state: userlog.state,
                country: userlog.country,
                loginid: userlog.loginid
                    }
                    nayan.push(mydata);
                    res.status(201).render("connection",{loginid:loginid});
                }                
                                
            }catch(error) {
        res.status(400).send("invalid loginid or password");
    }
});

io.sockets.on("connection", (socket) => {
    socketID = socket.id;
   console.log("User connected.." + socketID);
    io.emit("so", socketID);

    io.emit("nayan",{nayan, socketID});     

   socket.on("disconnect",(socket)=>{
       console.log("User disconnected");
   });
}); 

server.listen(port, function() {
    console.log("listning to the port no",this.address().port, app.settings.env);
});

       