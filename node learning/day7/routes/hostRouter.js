// CORE MODULES
const path = require("path");
// EXTERNAL MODULES
const express = require("express");
const hostRouter = express.Router();
hostRouter.get("/add-home", (req, res, next) => {
    console.log("admin pannel console", req.url, req.method);
    res.sendFile(path.join(__dirname, "../", "views", "registerHomePage.html"));
    next();
});
hostRouter.post("/add-home", (req, res, next) => {
    console.log("add-home post console", req.url, req.method, req.body);
    res.sendFile(path.join(__dirname, "../", "views", "registerSuccess.html"));
});
module.exports = hostRouter;
