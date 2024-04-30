
const express = require('express');
const connectDB = require('./connections/mongoConnect');
const bodyParser = require("body-parser");
const path = require('path');

const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");

const PORT = 1234;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// Route
app.use("/jobs", userRoute)
app.use("/company", companyRoute)

//
const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log("listening on port ", PORT);
        });
        connectDB();
    } catch (error) {
        console.error("Server not Started ", error);
    }
}

start();