const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/writing-data.js');
let content = fs.readFileSync(dataPath, 'utf-8');

content = content.replace(/title: '([^']+)\.png'/g, "title: '$1'");
content = content.replace(/emoji: '([^']+)\.png'/g, "emoji: '$1'");
content = content.replace(/description: '([^']+)\.png'/g, "description: '$1'");
content = content.replace(/hint: '([^']+)\.png'/g, "hint: '$1'");
content = content.replace(/difficulty: '([^']+)\.png'/g, "difficulty: '$1'");
content = content.replace(/difficultyText: '([^']+)\.png'/g, "difficultyText: '$1'");
content = content.replace(/category: '([^']+)\.png'/g, "category: '$1'");
content = content.replace(/subCategory: '([^']+)\.png'/g, "subCategory: '$1'");
content = content.replace(/question: '([^']+)\.png'/g, "question: '$1'");
content = content.replace(/sentence: '([^']+)\.png'/g, "sentence: '$1'");

content = content.replace(/'([^']+)\.png'/g, (match, p1) => {
  if (p1.includes('/images/')) {
    return match;
  }
  return `'${p1}'`;
});

fs.writeFileSync(dataPath, content, 'utf-8');
console.log('Fixed all .png suffixes successfully!');
