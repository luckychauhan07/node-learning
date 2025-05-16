const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === "/") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>taking inputs from the user</title></head>");
        res.write("<body><h2>welcome to my page </h2>");
        res.write(
            '<form action="/submit-details" method="post"><label for="username">username : </label><input type="text" id="username" placeholder="enter your name " name="username"/> <br /> <label for="male">male : </label> <input type="radio" value="male" name="gender" id="male" /><br /> <label for="female">female : </label> <input type="radio" id="female" value="female" name="gender"           /><br /><br>          <button type="submit">submit</button>     </form>'
        );
        return res.end();
    }
    if (req.url == "/submit-details" && req.method.toLowerCase() == "post") {
        const bodyArray = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            bodyArray.push(chunk);
        });
        req.on("end", () => {
            const fullBody = Buffer.concat(bodyArray).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
        });
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>taking inputs from the user</title></head>");
        res.write("<body><h2>your details are submitted successfully </h2>");
        return res.end();
    }
});
server.listen(3002, () => {
    console.log(`the server is listening at the port 3002`);
});
