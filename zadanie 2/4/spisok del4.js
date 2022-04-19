const axios = require('axios'); 
const fs = require("fs");


axios.get('https://http.cat/400', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat400.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/401', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat401to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/402', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat402to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/403', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat403to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/404', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat404.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/405', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat405to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/406', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat406to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/407', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat407to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/408', {responseType: 'arraybuffer'})
.then(function (response)
 {

    fs.writeFileSync("cat408to.jpg", response.data)
console.log(response);
})



.catch(function (error) {
console.log(error);
})


.then(function () {
});
