// CORE MODULES
const path = require("path");
// EXTERNAL MODULES
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, "../", "views", "userPage.html"));
});
module.exports = userRouter;
