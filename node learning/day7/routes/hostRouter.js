// CORE MODULES

const path = require("path");
// EXTERNAL MODULES
const express = require("express");
// LOCAL MODULES
const rootPath = require("../utils/pathUtil");
const hostRouter = express.Router();
hostRouter.get("/add-home", (req, res, next) => {
    console.log("admin pannel console", req.url, req.method);
    res.sendFile(path.join(rootPath, "views", "registerHomePage.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
    console.log("add-home post console", req.url, req.method, req.body);
    res.sendFile(path.join(rootPath, "views", "registerSuccess.html"));
});
module.exports = hostRouter;
