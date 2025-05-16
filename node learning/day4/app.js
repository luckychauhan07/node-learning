// external module
const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
    console.log("this the first middleware", req.url);
    res.send("<p>welcome to first express js response</p>");
    next();
});
app.use("/sumbit-details", (req, res, next) => {
    console.log("this the second middleware", req.url);
    next();
});

app.listen(3003, () => {
    console.log("server is listening at port 3003");
});
