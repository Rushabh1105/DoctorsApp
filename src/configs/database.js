const mongoose = require("mongoose");

const connect = () => {
    console.log("mongodb connection requested...");
    return mongoose.connect("mongodb://localhost/Doctor'sApp");
    //return mongoose.connect("mongodb://localhost/AirIndia");

}

module.exports = {
    connect,
}