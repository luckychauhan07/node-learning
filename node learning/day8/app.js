// EXTERNAL MODULES
const express = require("express");
const bodyParser = require("body-parser");
// LOCAL MODULES
const contactUsRouter = require("./routes/contactUs");
const rootPath = require("./utils/pathUtlis");
// CORE MODULES
const path = require("path");
const app = express();
app.get("/", (req, res, next) => {
    console.log(req.url, req.method, "first console");
    res.sendFile(path.join(rootPath, "views", "welcome.html"));
});
app.use(bodyParser.urlencoded());
app.use(contactUsRouter);
app.use((req, res, next) => {
    console.log(req.url, req.method, "second console");
    res.status(404).sendFile(path.join(rootPath, "views", "404Page.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log("your server is running on the port 3000");
});
