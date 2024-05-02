
const express = require('express');
const router = express.Router();

const Control = require("../controllers/userController");

router.get("/", Control.fetchUser);
router.post("/", Control.createUser);
router.get("/session", (req, res) => {
    const username = req.session.username || "No Username set!";
    console.log(username);
    res.send(username);
})
router.post("/session", (req, res) => {
    req.session.username = "Vishu Sharma";
    res.send("Session data set!");
    console.log(req.session.username);
});

module.exports = router;