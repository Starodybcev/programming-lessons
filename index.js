const express = require("express");

const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/.html");
});
app.post("/", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
   

});

app.listen(3000, () => console.log("Сервер запущен..."));