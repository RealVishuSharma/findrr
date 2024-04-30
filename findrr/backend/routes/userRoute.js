
const express = require('express');
const router = express.Router();

const Control = require("../controllers/userController");

router.get("/", Control.fetchUser);
router.post("/", Control.createUser);

module.exports = router;