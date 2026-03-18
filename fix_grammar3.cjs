const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'grammar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Check if line has + or ➔
  if (line.includes('+') || line.includes('➔')) {
    // If it's an <li> tag and doesn't have whitespace-nowrap on the <li> itself
    if (line.includes('<li>') && !line.includes('<li className="whitespace-nowrap')) {
      lines[i] = line.replace('<li>', '<li className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    }
    // If it's a <p> tag without className
    else if (line.includes('<p>') && !line.includes('<p className=')) {
      lines[i] = line.replace('<p>', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    }
    // If it's a <p className="..."> tag but doesn't have whitespace-nowrap
    else if (line.includes('<p className="') && !line.includes('whitespace-nowrap')) {
      lines[i] = line.replace('<p className="', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar ');
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Done fixing grammar3');
