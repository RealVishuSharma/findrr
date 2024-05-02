
const jobData = require("../models/jobModel");

const createJob = async(req, res) => {
    try {
        const newJob = await jobData(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log(error);
    }
}

const fetchJob = async(req, res) => {
    try {
        const jobs = await jobData.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
};

module.exports = {createJob, fetchJob};