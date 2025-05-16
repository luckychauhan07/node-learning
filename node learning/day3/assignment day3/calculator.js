const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write(
            "<body><h1>welcome to calculator </h1><br/><a href='calculator'>go to calculator</a><br/></body>"
        );
        res.write("</html>");
        return res.end();
    } else if (req.url === "/calculator") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>taking inputs from the user</title></head>");
        res.write("<body><h2>welcome to my page </h2>");
        res.write(
            '<form action="/calculate-result" method="post"><label for="username">number 1 : </label><input type="text" id="username" placeholder="enter your first number " name="number1"/> <br /><br/><label for="number2">number 2 : </label><input type="text" id="number2" placeholder="enter your second number " name="number2"/> <br /> <br /><br>          <button type="submit">add</button>     </form>'
        );
        return res.end();
    } else if (
        req.url === "/calculate-result" &&
        req.method.toLowerCase() === "post"
    ) {
        const numbersArray = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            numbersArray.push(chunk);
        });
        req.on("end", () => {
            const fullBody = Buffer.concat(numbersArray).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            const result =
                Number(bodyObject.number1) + Number(bodyObject.number2); 
            res.setHeader("content-Type", "text/html");
            res.write("<html>");
            res.write("<head><title>navigation by backend</title></head>");
            res.write(`<body><h1>your result is ${result}</h1><br/></body>`);
            res.write("</html>");
            return res.end();
        });
    } else if (req.url === "/calculate-result") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h1>welcome to calculator </h1><br/></body>");
        res.write("</html>");
        return res.end();
    }
});
server.listen(3002, () => {
    console.log("server is listening at the post 3002");
});
