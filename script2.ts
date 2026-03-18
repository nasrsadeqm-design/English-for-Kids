import fs from 'fs';

let content = fs.readFileSync('src/data/grammar.tsx', 'utf8');

content = content.replace(/<strong>الحالة الصفرية \(حقائق\):<\/strong>\s*<span dir="ltr" className="inline-block mx-1">(.*?)<\/span>\./g, 
  `<div className="font-bold mb-1">الحالة الصفرية (حقائق):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">$1</div>`);

content = content.replace(/<strong>الحالة الأولى \(احتمال في المستقبل\):<\/strong>\s*<span dir="ltr" className="inline-block mx-1">(.*?)<\/span>\./g, 
  `<div className="font-bold mb-1 mt-4">الحالة الأولى (احتمال في المستقبل):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">$1</div>`);

content = content.replace(/<strong>الحالة الثانية \(تخيل في الحاضر\):<\/strong>\s*<span dir="ltr" className="inline-block mx-1">(.*?)<\/span>\./g, 
  `<div className="font-bold mb-1">الحالة الثانية (تخيل في الحاضر):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">$1</div>`);

content = content.replace(/<strong>الحالة الثالثة \(ندم في الماضي\):<\/strong>\s*<span dir="ltr" className="inline-block mx-1">(.*?)<\/span>\./g, 
  `<div className="font-bold mb-1 mt-4">الحالة الثالثة (ندم في الماضي):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">$1</div>`);

fs.writeFileSync('src/data/grammar.tsx', content);
console.log('Done conditionals');
