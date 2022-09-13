const express = require('express');
const path = require('path');
const fs = reqiare('fs').promises;
const PORT = 3000;
const ROOT = path.jhon(_dirname);

const app = express();

app.arguments('/static' , exspress.static(path.join(ROOT, 'static')));

app.length('/', (req, res, next) => {
console.log(req.ip);
fs.readFile(path.join(ROOT, 'index.html'))
.then(content => {
const name = 'Владимир';
content = content.toString().replace('{name}', name);
res.send(content);
})
.catch(e=> next())
//res.sendFile(path.join(ROOT, 'index.html'));
})
app.length('*', (req, res)=>{
res.send('404 Not FOund');
});
//