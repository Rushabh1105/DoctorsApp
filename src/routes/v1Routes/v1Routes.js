const express = require("express");


const router = express.Router();

router.get("/help", async(req, res) => {
    res.json({
        status : 200,
        success : true,
        message : "hitting the api",
        data : {
            call_us_on : "+91XXXXXXXXXX",
            email_us_at : "abc@xyz.com",
        }
    })
})



module.exports = router;