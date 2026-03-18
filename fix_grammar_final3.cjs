const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'grammar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace flex-wrap with flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar
content = content.replace(/flex-wrap/g, 'flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar');

// 2. Add whitespace-nowrap to <span className="inline-block mx-1">
content = content.replace(/className="inline-block mx-1"/g, 'className="inline-block mx-1 whitespace-nowrap"');

// 3. Process <li> tags containing + or ➔
content = content.replace(/<li>([\s\S]*?)<\/li>/g, (match, inner) => {
  if (inner.includes('+') || inner.includes('➔')) {
    return `<li className="whitespace-nowrap overflow-x-auto custom-scrollbar">${inner}</li>`;
  }
  return match;
});

// 4. Process <p> tags containing + or ➔
content = content.replace(/<p([^>]*)>([\s\S]*?)<\/p>/g, (match, attrs, inner) => {
  if (inner.includes('+') || inner.includes('➔')) {
    if (attrs.includes('className="')) {
      if (!attrs.includes('whitespace-nowrap')) {
        let newAttrs = attrs.replace('className="', 'className="whitespace-nowrap overflow-x-auto custom-scrollbar ');
        return `<p${newAttrs}>${inner}</p>`;
      }
    } else {
      return `<p className="whitespace-nowrap overflow-x-auto custom-scrollbar"${attrs}>${inner}</p>`;
    }
  }
  return match;
});

// 5. Also, there are some explanations in the quiz that contain + or ➔.
// They are rendered in GrammarQuiz.tsx, but the text is in grammar.tsx.
// Wait, the user said "في قسم القواعد" (In the grammar section).
// So modifying the <p> and <li> in grammar.tsx should be enough.

fs.writeFileSync(filePath, content, 'utf8');
console.log('Grammar file updated successfully 3.');
