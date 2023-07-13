const url = "http://api.gael.cloud/general/public/sismos";

/* HTTP */
const http = require('http');

http.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



/* AXIOS */
const axios = require('axios');

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });



const request = require('request');

request(url, function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});



  /* FETCH */

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

/* SUPERAGENT */
const superagent = require('superagent');

superagent
  .get(url)
  .end((err, res) => {
    console.log(res.body);
});