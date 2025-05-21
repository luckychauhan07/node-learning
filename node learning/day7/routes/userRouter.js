// CORE MODULES
const path = require("path");
// EXTERNAL MODULES
const express = require("express");
// LOCAL MODULES
const rootPath = require("../utils/pathUtil");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(rootPath, "views", "userPage.html"));
});
module.exports = userRouter;
