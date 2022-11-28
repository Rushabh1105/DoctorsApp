const express = require("express");

const apiRouter = require("./src/routes/apiRouter");


const app = express();


app.use("/api", apiRouter);





app.listen(8000, () => {



    console.log("server started successfully...");
})