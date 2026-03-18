const fs = require('fs');
const path = './src/data/grammar.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace flex-wrap with flex-nowrap overflow-x-auto
content = content.replace(/flex-wrap/g, 'flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar');

// Also, for any <p> or <span> containing + or ➔, we might want to ensure they don't wrap.
// Actually, let's just add a global CSS class to index.css and apply it to the container in GrammarLesson.tsx
// But wait, if I just replace flex-wrap, that fixes the flex containers. What about the <p> tags?
// Let's add a class to them.
content = content.replace(/<p className="text-xl">/g, '<p className="text-xl whitespace-nowrap overflow-x-auto custom-scrollbar">');
content = content.replace(/<p className="text-xl">/g, '<p className="text-xl whitespace-nowrap overflow-x-auto custom-scrollbar">');

fs.writeFileSync(path, content);
console.log('Done');
