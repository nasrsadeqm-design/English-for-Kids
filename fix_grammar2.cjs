const fs = require('fs');
const path = './src/data/grammar.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/className="inline-block mx-1"/g, 'className="inline-block mx-1 whitespace-nowrap"');

fs.writeFileSync(path, content);
console.log('Done');
