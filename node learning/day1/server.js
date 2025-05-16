const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req);
});
server.listen(3002, () => {
    console.log("server is listening at post 3002");
});
