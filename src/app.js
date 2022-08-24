const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
//const ejs = require("ejs");

require("./db/conn");
const Register = require("./models/registers");
const Data = require("./models/data");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("view engine", "ejs")
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/data", (req, res) => {
        res.render("data");
});

app.post("/register", async (req, res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword) {

            const registerdetails = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                mobile_no: req.body.mobile_no,
                email: req.body.email,
                address: req.body.address,
                loginid: req.body.loginid,
                password: password,
                confirmpassword: cpassword
            })

           const registered = await registerdetails.save();
           res.status(201).render("index");
           

        }else {
            res.send("Password are not matching")
        }

    }catch(error) {
        res.status(400).send(error);
    }
});

app.post("/login", async(req, res) => {
    try {
            const email = req.body.email;
            const password = req.body.password;

            const useremail = await Register.findOne({email:email});
           
            if(useremail.password === password) {
                res.status(201).render("index");
            }else {
                res.send("invalid login details");
            }

    }catch(error) {
        res.status(400).send("invalid Email");
    }
});


// app.post("/data", async(req, res) => {
    
// });


app.listen(port, () => {
    console.log('server is running on port no ${port}')
})