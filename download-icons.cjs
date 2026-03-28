const fs = require('fs');
const https = require('https');
const path = require('path');

const icon192Url = 'https://i.ibb.co/xtpjQBbd/icon-192-png.png';
const icon512Url = 'https://i.ibb.co/KzfLFZgT/icon-512-png.png';
const iconsDir = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${url}: ${response.statusCode}`);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${dest}: ${err.message}`);
  });
};

download(icon192Url, path.join(iconsDir, 'icon-192.png'));
download(icon512Url, path.join(iconsDir, 'icon-512.png'));
