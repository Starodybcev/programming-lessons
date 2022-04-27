const axios = require('axios'); 
const fs = require("fs");

      


    var step;
    for (step = 100; step < 600; step++) {
      // Запускается 100 раз, с шагом от 100 до 600.
      axios.get('https://http.cat/' + 456789, {responseType: 'arraybuffer'})
.then(function (response)
      {


      fs.writeFileSync(step, response.data)
      console.log(response);
      }
)}  

