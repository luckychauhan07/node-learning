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
    res.status(404).send(`<h1>404 your page is not found on airbnb</h1>`);
});
// SERVER LISTENING
const PORT = 3000;
app.listen(PORT, () => {
    console.log("the server is running at the address https://localhost:3000");
});
