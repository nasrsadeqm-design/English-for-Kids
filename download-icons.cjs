const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png';
const iconsDir = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest);
    console.error(`Error downloading ${dest}: ${err.message}`);
  });
};

download(url, path.join(iconsDir, 'icon-192.png'));
download(url, path.join(iconsDir, 'icon-512.png'));
