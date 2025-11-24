// Script to remove m-dashes from all newsletter files
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const newsletterFiles = glob.sync('app/newsletters/**/page.tsx');

newsletterFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace m-dashes with appropriate punctuation
  // Pattern 1: "word—word" -> "word. Word" or "word, word"
  content = content.replace(/(\w+)—(\w+)/g, (match, p1, p2) => {
    // If second part starts with capital or is 'it's', 'they're', etc, use period
    if (/^[A-Z]/.test(p2) || /^(it|they|this|that|what|which)'[a-z]/.test(p2)) {
      return `${p1}. ${p2}`;
    }
    // Otherwise use comma
    return `${p1}, ${p2}`;
  });
  
  // Pattern 2: "text—text" (with spaces) -> "text. Text" or "text, text"
  content = content.replace(/(\w+\s+\w+)—(\w+)/g, (match, p1, p2) => {
    if (/^[A-Z]/.test(p2)) {
      return `${p1}. ${p2}`;
    }
    return `${p1}, ${p2}`;
  });
  
  // Pattern 3: Standalone m-dashes
  content = content.replace(/—/g, ', ');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated: ${file}`);
});

console.log('All newsletters updated!');

