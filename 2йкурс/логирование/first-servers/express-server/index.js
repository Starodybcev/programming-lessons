const path = require('path');
const express = require('express');
const app = express();


//app.use(express.static(path.join(__dirname, 'public')));
//let book1 = 'Гарри Поттер и узник Азкабана',book2 = 'Зеленая миля', book3 = 'Свита короля', book4 = 'прислуга', book5 = 'Вторая жизнь Уве';
//console.log(book1);
//console.log(book2);
//console.log(book3);
//console.log(book4);
//console.log(book5);

//app.get('/', (req, res) => {
    //res.sendFile(`${__dirname}/public/index.html`);
//});
//app.get('/home', (req, res) => {
  //  res.send({ message:'-----КНИЖНЫЙ МАГАЗИН-----' });
//});
//домашняя страница
//app.get('/home/list/book1', (req, res) => {
  //  res.send({ 200: '-Война и Мир' });
    //let income = 200;
    //let strIncome = "200";
    //let result = income == strIncome;
    //console.log(result); //true
//});
//app.get('http://localhost:3000/income?name=book&price=200',(req,res)=>{
    var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams('foo');
console.log(params);
//req.searchParams.get('name');
  //  req.searchParams.get('price');
//})
//app.get('/income', (req, res) => {
  
  //  var url = new URL('http://localhost:3000/income?name=book&price=200');
    //const params = new URLSearchParams(url.search);
    //console.log([...params.getAll("name")])

    //res.send("Income success")
    
      
 
//});
//app.get('/home/list/book1/sell', (req, res) => {
  //  res.send({ Продал:'Война и мир:' });

//});






app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});