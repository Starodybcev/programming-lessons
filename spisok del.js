const axios = require('axios');
axios.get('https://http.cat/[status_code]')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.then(function () {
});
