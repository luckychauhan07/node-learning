const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write(
            "<body><h1>welcome to navigation page</h1><br/><a href='home'>home</a><br/><a href='men'>men</a><br/><a href='women'>women</a><br/><a href='kids'>kids</a><br/><a href='cart'>cart</a></body>"
        );
        res.write("</html>");
        return res.end();
    } else if (req.url === "/home") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h2>welcome to home page</h2></body>");
        res.write("</html>");
        return res.end();
    } else if (req.url === "/men") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h2>welcome to mens section page</h2></body>");
        res.write("</html>");
        return res.end();
    } else if (req.url === "/women") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h2>welcome to women section page</h2></body>");
        res.write("</html>");
        return res.end();
    } else if (req.url === "/kids") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h2>welcome to kids section page</h2></body>");
        res.write("</html>");
        return res.end();
    } else if (req.url === "/cart") {
        res.setHeader("content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>navigation by backend</title></head>");
        res.write("<body><h2>welcome to cart page</h2></body>");
        res.write("</html>");
        return res.end();
    }
});
server.listen(3002, () => {
    console.log("server is listening on port 3002");
});
