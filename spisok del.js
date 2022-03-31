const axios = require('axios');
// Make a request for a user with a given ID
axios.get('https://http.cat/[status_code]')
.then(function (response) {
// handle success
console.log(response);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});
