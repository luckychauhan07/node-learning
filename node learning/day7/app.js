// CORE MODULES
const path = require("path");
// EXTERNAL MODULES
const express = require("express");
// LOCAL MODULES
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

// THE 404 REQEST IS ALWAYS LAST
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "404page.html"));
});
// SERVER LISTENING
const PORT = 3000;
app.listen(PORT, () => {
    console.log("the server is running at the address https://localhost:3000");
});
