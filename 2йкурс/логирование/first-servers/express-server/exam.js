const express = require('express');
const app = express();

let books = [];

app.get('/income', (req, res) => {
    books.push(req.query);
    res.send("Income success");
});

app.get('/books', (req, res) => {
    res.send(books.map(el => JSON.stringify(el)).join('<br />'));
});

app.get('/sell', (req, res) => {
    books = books.filter(el => el.name !== req.query.name);
    res.send("Book sold");
});

app.listen(3000, () => console.log("Port 3000, listening"));