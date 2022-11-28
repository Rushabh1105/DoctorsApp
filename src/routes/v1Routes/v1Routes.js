const express = require("express");

const categoryController = require("../../controller/categoryController");

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

router.post("/category", categoryController.createCategory);
router.patch("/category/:name", categoryController.updateCategory);
router.get("/category/:name", categoryController.getCategory);
router.get("/category", categoryController.getAllCategory);
router.delete("/category/:name", categoryController.deleteCategory);



module.exports = router;