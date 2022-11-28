const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;


const Admin = require("../models/user");

passport.use("signup", new localStrategy(
    {
        usernameField : "email",
        passwordField : "password",
    },
    async (email, password, done) => {
        try {
            const admin = await Admin.create({email, password});
            return done(null, admin, {message : "signup successful"});
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
));

passport.use("login", new localStrategy(
    {
        usernameField : "email",
        passwordField : "password",
    },

    async (email, password, done) => {
        try {
            const admin = await Admin.findOne({email});
            if(!admin){
                return done(null, false, {message : "user not found"});
            }
            const validate = await admin.isValidPassword(password);
            if(!validate){
                return done(null, false, {message : "wrong password"});
            }

            return done(null, admin, {message : "login successful"});
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
))

passport.use(new jwtStrategy(
    {
        secretOrKey : "TOP_SECRET",
        jwtFromRequest : extractJWT.fromUrlQueryParameter("secret_token"),
    },

    async (token, done) => {
        try {
            return done(null, token.admin)
        } catch (err) {
            console.log(err);
            return done(err);            
        }
    }
))