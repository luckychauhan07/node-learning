const http = require("http");
// function reqesutListener(req, res) {
//     console.log(req);
// }
// http.createServer(reqesutListener);
const server = http.createServer((req, res) => {
    console.log(req);
});
let PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running on address http:localhost:${PORT}`);
});
