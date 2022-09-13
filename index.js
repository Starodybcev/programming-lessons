const express = require("express");

const app = express();

app.use(express.urlencoded({
extended: false
}));

app.get("/", function (request, response) {
response.sendFile(__dirname + "/form.html");
});
app.post("/",function (request, response) {
if (!request.body) return response.sendStatus(400);
console.log(request.body);
response.send(`${request.body.login} - ${request.body.password} - ${request.body.gender}-${request.body.firstname} - `);
});

app.listen(3000, () => console.log("Сервер запущен..."));