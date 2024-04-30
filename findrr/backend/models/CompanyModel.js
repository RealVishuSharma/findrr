
const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please Enter Company's Name!"]
    },
    logo: {
        type: String,
        // required: [true, "Please Enter Company's Logo"],
    },
    industry: {
        type: String,
        // required: [true, "Please Enter Company's Industry"],
    },
    size: {
        type: Number,
        // required: [true, "Please Enter Company's Size"],
    },
    location: {
        type: String,
        // required: [true, "Please Enter Company's Location"],
    },
    website: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {
        type: String,
    },
    contactperson: {
        type: String,
        // required: [true, "Please Enter Company's Contact Person!"],
    },
    email: {
        type: String,
        // required: [true, "Please Enter Company's Email"],
    },
    phone: {
        type: Number,
        // required: [true, "Please Enter Company's Phone Number"],
    },
    media: {
        type: Array,
    }
})

const CompanyData = mongoose.model("Companies", CompanySchema);
module.exports = CompanyData;