const path = require("path");
const express = require("express");
//LOCAL MODULES
const rootPath = require("../utils/pathUtlis");
const constactUsRouter = express.Router();
constactUsRouter.get("/contact-us", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(rootPath, "views", "input.html"));
});
constactUsRouter.post("/contact-us", (req, res, next) => {
    console.log("contact-us post middle ware", req.path, req.method, req.body);
    res.sendFile(path.join(rootPath, "views", "success.html"));
});
module.exports = constactUsRouter;
