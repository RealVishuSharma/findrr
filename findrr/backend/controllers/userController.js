
const session = require("express-session");
const UserData = require("../models/userModel");

 const createUser = async(req, res) => {
    try {
        const newUser = new UserData(req.body);
        await newUser.save();
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        res.status(201).json(newUser);
        console.log("Session Created!");
    } catch (error) {
        res.status(400).json ({
            message: error.message
        });
        console.log(error);
    }
};

 const fetchUser = async(req, res) => {
    try {
        const users = await  UserData.find();
        res.json(users);
        const email = req.session.``
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createUser, fetchUser};

