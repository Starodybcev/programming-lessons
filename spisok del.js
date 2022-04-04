const axios = require('axios');
axios.get('https://http.cat/[status_code]')
.then(function (response) {
console.log(response.data);response.data 
})
.catch(function (error) {
console.log(error);
})
.then(function () {
});


fs=require("fs")
fs.writeFileSync("txt.txt", response.data,  "ascii")
  