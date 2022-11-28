const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true,
    },
    status : {
        type : String,
        required : true,
        default : "available",
        enum : ["available", "busy"],
    }
},{timestamps : true});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;