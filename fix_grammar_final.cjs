const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'grammar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace flex-wrap with flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar
content = content.replace(/flex-wrap/g, 'flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar');

// 2. Add whitespace-nowrap to <p className="text-xl">
content = content.replace(/<p className="text-xl">/g, '<p className="text-xl whitespace-nowrap overflow-x-auto custom-scrollbar">');

// 3. Add whitespace-nowrap to <span className="inline-block mx-1">
content = content.replace(/className="inline-block mx-1"/g, 'className="inline-block mx-1 whitespace-nowrap"');

// 4. Add whitespace-nowrap to any <li> or <p> that contains + or ➔
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (line.includes('+') || line.includes('➔')) {
    if (line.includes('<li>') && !line.includes('whitespace-nowrap')) {
      lines[i] = line.replace('<li>', '<li className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    } else if (line.includes('<p>') && !line.includes('<p className=')) {
      lines[i] = line.replace('<p>', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar">');
    } else if (line.includes('<p className="') && !line.includes('whitespace-nowrap')) {
      lines[i] = line.replace('<p className="', '<p className="whitespace-nowrap overflow-x-auto custom-scrollbar ');
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Grammar file updated successfully.');
