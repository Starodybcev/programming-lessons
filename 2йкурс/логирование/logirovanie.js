const fs = require("fs");
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Home</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
    } else {
        response.write("<h2>Not found</h2>");
    }
    fs.appendFileSync("hello.txt", request.url);
    fs.appendFileSync("hello.txt", request.method);
    fs.appendFileSync("hello.txt", user);
    console.log("Запись файла завершена...");

    response.end();
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("заголовки");
    console.log(request.headers);
    let user = JSON.stringify(request.headers);
    

};
http.createServer(requestHandler).listen(3000);