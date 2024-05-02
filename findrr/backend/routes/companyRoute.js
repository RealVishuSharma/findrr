
const express = require('express');
const router = express.Router();

const companyControl = require("../controllers/companyController");
const jobControl = require("../controllers/jobsController");

router.post("/", companyControl.createCompany);
router.get("/post", jobControl.fetchJob);
router.post("/post", jobControl.createJob);

module.exports = router;