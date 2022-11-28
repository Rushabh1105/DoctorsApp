const doctorServiece = require("../servieces/doctorServieces");

const createDoctor = async(req, res) => {
    try {
        const response = await doctorServiece.createDoctor(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "Added doctor",
            data : {
                response
            }
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "Something went wrong",
        })
    }
}

const updateDoctor = async(req, res) => {
    try {
        const response = await doctorServiece.updateDoctor(req.params.id, req.body);
        return res.json({
            status : 200,
            success : true,
            message : "Added doctor",
            data : {
                response
            }
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "Something went wrong",
        })
    }
}

const deleteDoctor = async(req, res) => {
    try {
        const response = await doctorServiece.deleteDoctor(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "Added doctor",
            data : {
                response
            }
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "Something went wrong",
        })
    }
}

const getDoctor = async(req, res) => {
    try {
        const response = await doctorServiece.getDoctor(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "Added doctor",
            data : {
                response
            }
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "Something went wrong",
        })
    }
}

const getDoctorCategory = async(req, res) => {
    try {
        const response = await doctorServiece.getDoctorCategory(req.body.name);
        return res.json({
            status : 200,
            success : true,
            message : "Added doctor",
            data : {
                response
            }
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "Something went wrong",
        })
    }
}

module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctor,
    getDoctorCategory
}