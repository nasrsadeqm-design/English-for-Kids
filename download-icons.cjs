const fs = require('fs');
const https = require('https');

const url = 'https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png';
const file192 = fs.createWriteStream('./public/icon-192.png');
const file512 = fs.createWriteStream('./public/icon-512.png');

https.get(url, (response) => {
  response.pipe(file192);
});

https.get(url, (response) => {
  response.pipe(file512);
});
