const fs = require('fs');
const https = require('https');
const path = require('path');

const icon192Url = 'https://raw.githubusercontent.com/nasrsadeqm-design/English-for-Kids/main/public/icon-192.png';
const icon512Url = 'https://raw.githubusercontent.com/nasrsadeqm-design/English-for-Kids/main/public/icon-512.png';
const iconsDir = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function run() {
  try {
    await Promise.all([
      download(icon192Url, path.join(iconsDir, 'icon-192.png')),
      download(icon512Url, path.join(iconsDir, 'icon-512.png'))
    ]);
    console.log('All icons downloaded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error downloading icons:', err);
    process.exit(1);
  }
}

run();
