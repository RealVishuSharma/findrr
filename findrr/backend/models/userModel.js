
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please Enter your name!"]
    },
    location: {
        type: String,
        // required: [true, "Please Enter your location"],

    },
    role: {
        type: String,
        // required: [true, "Please Enter your Primary Role"],
    },
    experience: {
        type: String,
        // required: [true, "Please Enter your Experience!"],
    },
    opento: {
        type: String,
        // required: [true, "Please Enter the roles you are open to"],
    },
    bio:{
        type: String,
    },
    website: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    twitter: {
        type: String,
    },
    currentCompany: {
        type: String,
        // required: [true, "Please Enter your Company Name"],
    },
    title: {
        type: String,
        // required: [true, "Please Enter your title"],
    },
    startDate: {
        type: String,
        // required: [true, "Please Enter your joining Date!"]
    },
    endDate: {
        type: String,
        // required: [true, "Please Enter the last Date!"]
    },
    description: {
        type: String,
    },
    college: {
        type: String,
        // required: [true, "Please Enter your College!"],
    },
    graduation: {
        type: String,
        // required: [true, "Please Enter your Graduation Completion Year!"],
    },
    degree: {
        type: String,
        // required: [true, "Please Enter your Degree Type!"],
    },
    field: {
        type: String,
        // required: [true, "Please Enter your field of Study!"],
    },
    skills: {
        type: Array,
        // required: [true, "Please Enter all your skills!"],
    },
    gender: {
        type: Boolean,
        // required: [true, "Please Enter your gender!"],
    },
    email: {
        type: String,
        // required: [true, "Please Enter your email!"],
    },
    password: {
        type: String,
        // required: [true, "Please Enter your password!"],
    },
})

const UserData = mongoose.model("Users", UserSchema);
module.exports = UserData;