const CategoryServiece = require("../servieces/categoryServieces");

const createCategory = async (req, res) => {
    try {
        const response = await CategoryServiece.createCategory(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created a category",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const updateCategory = async (req, res) => {
    try {
        const response = await CategoryServiece.updateCategory(req.params._id, req.body);
        return res.json({
            status : 200,
            success : true,
            message : "Updated the category",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return resizeBy.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const getCategory = async (req, res) => {
    try {
        const response = await CategoryServiece.getCategory(req.params.name);
        console.log(req.params.name);
        return res.json({
            status : 200,
            success : true,
            message : "fetched the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return resizeBy.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const getAllCategory = async (req, res) => {
    try {
        const response = await CategoryServiece.getAllCategory();
        return res.json({
            status : 200,
            success : true,
            message : "fetched the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return resizeBy.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const response = await CategoryServiece.deleteCategory(req.params.name);
        return res.json({
            status : 200,
            success : true,
            message : "deleted the category",
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "something went wrong",
        });
    }
}

module.exports = {
    createCategory,
    updateCategory,
    getCategory,
    getAllCategory,
    deleteCategory
}