const fs = require('fs');

let content = fs.readFileSync('src/data/grammar.tsx', 'utf8');

// Replace المعلوم
content = content.replace(/<div className="flex flex-wrap items-center gap-2 font-bold mb-2">\s*<span>🔹 المعلوم:<\/span>([\s\S]*?)<\/div>/g, (match, inner) => {
  return `<div className="font-bold mb-2 space-y-2">
              <div>🔹 المعلوم:</div>
              <div className="flex flex-wrap items-center gap-2" dir="rtl">${inner}</div>
            </div>`;
});

// Replace المجهول
content = content.replace(/<div className="flex flex-wrap items-center gap-2 font-bold (text-[a-z]+-800) mb-2">\s*<span>🔹 المجهول:<\/span>([\s\S]*?)<\/div>/g, (match, colorClass, inner) => {
  return `<div className="font-bold ${colorClass} mb-2 space-y-2">
              <div>🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2" dir="rtl">${inner}</div>
            </div>`;
});

fs.writeFileSync('src/data/grammar.tsx', content);
console.log('Done');
