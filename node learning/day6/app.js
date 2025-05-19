const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use("/add-home", (req, res, next) => {
    console.log(req.url, req.method);
    next();
});
app.use(bodyParser.urlencoded());
app.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.send(`<h1>welcome to airbnb</h1>
    <a href="/add-home">Add home</a> 
    `);
});
app.get("/add-home", (req, res, next) => {
    res.send(`<h1>register your home here</h1>
    <form action="/add-home" method="POST">
    <input type="text" placeholder="enter your house name here" name="houseName" />
    <input type="submit"/>
    </form>`);
    next();
});
app.post("/add-home", (req, res, next) => {
    console.log(req.url, req.method, req.body);
    ś;
    res.send(`<h1>home is register successfully to airbnb</h1>
      <a href="/">go to home</a> 
  `);
});
app.listen(3000, () => {
    console.log("the server is listening at the port number 3000");
});
