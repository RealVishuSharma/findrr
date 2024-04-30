
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    position: {
        type: String,
        required: [true, "Enter the job position!"]
    },
    skills: {
        type: Array,
        required: [true, "Enter the skills required for the job"],
    },
    experience: {
        type: Number,
        required: [true, "Enter the experience required for the job"],
    },
    salary: {
        type: Number,
        
    },
    location: {
        type: String,
        required: [true, "Enter the location of the job"],
    },
    description: {
        type: String,
        required: [true, "Enter the details of the job"],
    },

})

const jobData = mongoose.model("jobs", jobSchema);
module.exports = jobData;