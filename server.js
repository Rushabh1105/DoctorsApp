const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const apiRouter = require("./src/routes/apiRouter");
const {connect} = require("./src/configs/database");
const Admin = require("./src/models/user");
require("./src/utils/auth");
const authRouter = require("./src/routes/authRouter");


const app = express();


app.use(bodyParser.urlencoded({extended : false}) );
app.use("/", authRouter);
app.use("/api", passport.authenticate("jwt", {session : false}),apiRouter);





app.listen(8000, async() => {
    await connect();
    console.log("mongodb connectes succesfully...")
    console.log("server started successfully...");

   /*  const admin = await Admin.create({
        email : "abc@xyz.com",
        password : "12345",
    });

    console.log(admin); */
})