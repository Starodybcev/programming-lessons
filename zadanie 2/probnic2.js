const axios = require('axios');
const fs = require('fs');

let now = new Date();
let daysOfYear = [];
const baseUrl = 'https://a4dzytphl9.execute-api.ap-southeast-1.amazona..

for (var d = new Date(2016, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
daysOfYear.push(new Date(d).toISOString().substring(0,10));
}

const waitFor = (time) => {
return new Promise((resolve => setTimeout(resolve, time)))
}

const getUrls = async () =>{
let day
for (day of daysOfYear) {
console.log('getting day', baseUrl + day)
// NOTE: Throttle the calls to not overload the server 20190813:Alevale
await waitFor(4000)

await axios.get(baseUrl + day)
.then(response => {
console.log(response.data);
console.log(response);
if (response.data && response.data.download_url) {
return response.data.download_url
}
return Promise.reject('Could not retrieve response.data.download_url')
})
.then((url) =>{
axios({
method: 'get',
url,
responseType: 'stream'
})
.then(function (response) {
// NOTE: Save the file as 2019-08-13 20190813:Alevale
response.data.pipe(fs.createWriteStream(`${day}.csv`))
})
.catch(console.error)

})
.catch(error => {
console.log(error);
});
}
}

getUrls()