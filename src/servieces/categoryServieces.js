const Category = require("../models/categories");

const createCategory = async (data) => {
    try {
        const newCategory = {
            categoryName : data.categoryName,
            categoryDescription : data.categoryDescription,
        }
        const response = await new Category(newCategory).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateCategory = async (name, data) => {
    try {
        const response = await Category.updateOne({categoryName : name}, data);
        return response; 
    } catch (err) {
        console.log(err);
    }
}

const getCategory = async (categoryName) => {
    try {
        const response = await Category.findOne({categoryName});
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAllCategory = async () => {
    try {
        const response = await Category.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const deleteCategory = async (categoryName) => {
    try {
        const response = await Category.findOneAndDelete({categoryName : categoryName})
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createCategory,
    updateCategory,
    getCategory,
    getAllCategory,
    deleteCategory,
}