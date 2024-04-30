
const express = require('express');
const router = express.Router();

const Control = require("../controllers/companyController");

router.post("/", Control.createCompany);

module.exports = router;