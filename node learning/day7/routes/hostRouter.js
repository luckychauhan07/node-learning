const express = require("express");
const hostRouter = express.Router();
hostRouter.get("/add-home", (req, res, next) => {
    console.log("admin pannel console", req.url, req.method);
    res.send(`<h1>register your home here : </h1>
    <form action="/host/add-home" method="POST">
    <input type="text" placeholder="enter your house name here" name="houseName"/>
    <input type="submit" />
    </form>`);
    next();
});
hostRouter.post("/add-home", (req, res, next) => {
    console.log("add-home post console", req.url, req.method, req.body);
    res.send(`<h1>you have registered your house successfully</h1>
    <a href="/">Go the home</a>`);
});
module.exports = hostRouter;
