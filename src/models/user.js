const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
},{timestamps : true});

adminSchema.pre("save", async function encryptPassword(next){
    const admin = this;
    const hash = await bcrypt.hash(this.password, 4);
    this.password = hash;
    next();
});

adminSchema.methods.isValidPassword = async function checkValidity(password){
    const admin = this;
    const compare = await bcrypt.compare(password, admin.password);
    return compare;
}

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

