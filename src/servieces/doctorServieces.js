const Doctor = require("../models/doctors");
const Category = require("../models/categories");

createDoctor = async (data) => {
    try {
        const newDoctor = {
            name : data.name,
            category : data.category,
            status : data.status,
        }
        const response = await new Doctor(newDoctor).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

updateDoctor = async (_id, data) => {
    try {
        const response = await Doctor.findByIdAndUpdate(_id, {status : data.status});
        return response;
    } catch (err) {
        console.log(err);
    }
}

getDoctor = async (id) => {
    try {
        const response = await Doctor.findById(id);
        //console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}

deleteDoctor = async (_id) => {
    try {
        const response = await Doctor.findByIdAndDelete(_id);
        return response;
    } catch (err) {
        console.log(err);
    }
}

getDoctorCategory = async (name) => {
    try {
        const doctor = await Doctor.findOne({name : name});
        //console.log(doctor)
        const response = await Category.findById(doctor.category);
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createDoctor,
    updateDoctor,
    getDoctor,
    deleteDoctor,
    getDoctorCategory
}
