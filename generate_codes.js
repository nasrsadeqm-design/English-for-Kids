const fs = require('fs');

const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No O, 0, I, 1 to avoid confusion
const generateCode = () => {
  let code = '';
  for (let i = 0; i < 12; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
    if ((i + 1) % 4 === 0 && i !== 11) code += '-';
  }
  return `ENG-${code}`;
};

const students = [];
const usedCodes = new Set();

for (let i = 1; i <= 5000; i++) {
  let code = generateCode();
  while (usedCodes.has(code)) {
    code = generateCode();
  }
  usedCodes.add(code);
  students.push({
    student: `STU-${i.toString().padStart(4, '0')}`,
    code: code
  });
}

fs.writeFileSync('src/data/students.json', JSON.stringify(students, null, 2));
console.log('Generated 5000 codes successfully.');
