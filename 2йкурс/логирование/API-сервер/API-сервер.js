const fs = require("fs");
const http = require("http");



const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
        fs.appendFileSync("hello.txt", 'переход в hello\n');
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");




    }
};
http.createServer(requestHandler).listen(3000);