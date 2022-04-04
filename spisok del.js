const axios = require('axios'); 
const fs = require("fs");

axios.get('https://http.cat/[status_code]')
.then(function (response) {
fs.writeFileSync("txt.txt", response.data);

console.log(response.data);response.data 
})
.catch(function (error) {
console.log(error);
})
.then(function () {
});


  