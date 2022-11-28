const express = require("express");
const passport = require("passport");
const jsonwebtoken = require("jsonwebtoken");
const Admin = require("../models/user");
const { session } = require("passport");

const router = express.Router();


router.post("/signup", 
    passport.authenticate("signup", {session : false}),
    async (req, res) => {
        console.log(req.user);
        return res.json({
            status : 200,
            success : true,
            message : "signup successful",
            data : {
                admin : req.user,
            }
        })
    }
)

router.post("/login",
    async(req, res, next)=> {
        passport.authenticate("login",
            async(err, admin, info) => {
                try {
                    if(err || !admin){
                        const error = new Error("something went wrong :(");
                        return next(error);
                    }

                    req.login(
                        admin,
                        {session : false},
                        async (done) => {
                            if(err) {
                                return next(err);
                            }

                            const body = {_id : admin._id, email : admin.email};
                            const token = jsonwebtoken.sign({admin : body}, "TOP_SECRET");
                            return res.json ({
                                status : 200,
                                success : true,
                                message : "login successful",
                                data : token
                            });
                        }
                    )
                } catch (err) {
                    console.log(err);
                    return next(err);
                }
            }
        )(req, res, next)
    }
)


module.exports = router;