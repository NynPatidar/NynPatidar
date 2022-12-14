const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

require("./src/db/conn");
const Register = require("./src/models/registers");
const { json } = require("express");

// const static_path = path.join(__dirname, "../");
const view_path = path.join(__dirname, "../Nodejs/templates/views");
const partials_path = path.join(__dirname, "../Nodejs/templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false})); 

// app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", view_path);
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

app.get("/data", async (req, res) => {
const getDocument = async () => {
       try{ 
        const details = await Register.find();
            res.status(201).send(details);
        }catch(err) {
            console.log(err);
        }
    }; 
        getDocument();   
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
                confirmpassword: cpassword,
                date: req.body.date
             })

           const registered = await registerdetails.save();
           res.status(201).render("index");
           

        }else {
            res.send("Password not matching");
        
        }

    }catch(error) {
        res.status(400).send(error);
    }
});

app.post("/login", async (req, res) => {
    try {
            const loginid = req.body.loginid;
            const password = req.body.password;

            const useremail = await Register.findOne({loginid:loginid});
           
            if(useremail.password === password) {
                res.status(201).send(useremail);
            }else {
                res.send("invalid login details");
            }

    }catch(error) {
        res.status(400).send("invalid loginid password");
    }
});

app.listen(port, () => {
    console.log("listning to the port no at ${port}");
})
