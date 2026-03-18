const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'grammar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (line.includes('+') || line.includes('➔')) {
    if (line.includes('<li>') && !line.includes('<li className="whitespace-nowrap')) {
      lines[i] = line.replace('<li>', '<li className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    } else if (line.includes('<p>') && !line.includes('<p className=')) {
      lines[i] = line.replace('<p>', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    } else if (line.includes('<p className="') && !line.includes('<p className="whitespace-nowrap')) {
      lines[i] = line.replace('<p className="', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar ');
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Grammar file updated successfully 2.');
