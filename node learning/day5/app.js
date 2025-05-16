const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use((req, res, next) => {
    console.log("first middle ware", req.path, req.method);
    next();
});
app.use((req, res, next) => {
    console.log("second middle ware", req.path, req.method);
    next();
});
app.use((req, res, next) => {
    console.log("third middle ware", req.path, req.method);
    // res.send("<p>the response is send by the res.send method");
    next();
});
app.use("/", (req, res, next) => {
    console.log("fourth middle ware", req.path, req.method);
    next();
});

app.get("/contact-us", (req, res, next) => {
    console.log("second middle ware", req.path, req.method, req.body);
    res.send(
        " <form action='/contact-us' method='POST'><label for='name'>enter the user name:</label><input type='text' id='name' name='username' placeholder='enter the username here'/><label for='email'>enter your email :</label><input type='email' name='email' id='email' placeholder='user email'/> <button>sumbit</button> </form>"
    );
    next();
});
app.use(bodyParser.urlencoded());
app.post("/contact-us ", (req, res, next) => {
    console.log("contact-us post middle ware", req.path, req.method, req.body);
    res.send("<p>thanks for contact-us</p>");
    next();
});
const PORT = 3002;
app.listen(PORT, () => {
    console.log("the server is listening at the port number 3002");
});
