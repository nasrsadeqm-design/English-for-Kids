import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const generateCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `ENG-${segment()}-${segment()}-${segment()}`;
};

const students = Array.from({ length: 2000 }, (_, i) => ({
  student: `STU-${(i + 1).toString().padStart(4, '0')}`,
  code: generateCode(),
  used: false // Added to track status locally if needed, though static JSON won't update
}));

try {
  mkdirSync('src/data', { recursive: true });
  writeFileSync('src/data/students.json', JSON.stringify(students, null, 2));
  console.log('Generated 2000 student entries.');
} catch (err) {
  console.error(err);
}
