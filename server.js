const express = require("express");




const app = express();





app.get("/", async(req, res) => {
    res.json({
        status : 200,
        success : true,
        message : "hitting the api"
    })
})





app.listen(8000, () => {



    console.log("server started successfully...");
})