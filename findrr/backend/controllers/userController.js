
const UserData = require("../models/userModel")

 const createUser = async(req, res) => {
    try {
        const newUser = new UserData(req.body);
        await newUser.save();
        res.status(201).json(newUser);
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
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createUser, fetchUser};

