const http = require("http");
const requestHandler = (request, response) => {
console.log("Url: " + request.url);
console.log("Тип запроса: " + request.method);
console.log("User-Agent: " + request.headers["user-agent"]);
console.log("Все заголовки");
console.log(request.headers);
response.end("VSE RABOTAET");
};
http.createServer(requestHandler).listen(3000);




const http = require("http");

const host = 'localhost';
const port = 3000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Книжный магазин");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на  http://${host}:${port}`);
});