
const data = require("../models/CompanyModel");

const createCompany = async(req, res) => {
    try {
        const newCompany = await data(req.body);
        await newCompany.save();
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log(error);
    }
};

const fetchCompany = async (req, res) => {
    try {
        const company = await 
    } catch (error) {
        
    }
};

module.exports = {createCompany, fetchCompany};