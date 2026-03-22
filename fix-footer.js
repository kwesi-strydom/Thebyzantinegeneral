const fs = require('fs');
const path = require('path');

const dir = '/sessions/bold-fervent-heisenberg/mnt/Claude Cowork/01-BYZ-Project/Website/live/';
const files = ['act1.html', 'act2.html', 'act3.html', 'act4.html', 'act5.html', 'act6.html', 'act7.html'];

// CSS rules to add
const rulesToAdd = `
  .footer-newsletter-success { display: none; color: var(--accent); margin-top: 10px; }
  .footer-newsletter-error { display: none; color: #e74c3c; margin-top: 10px; }`;

files.forEach(filename => {
  const filePath = path.join(dir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');

  console.log(`\nProcessing ${filename}...`);

  // Find the base CSS .site-footer block - we need to find it BEFORE the @media query
  // Look for the pattern: "/* Site Footer */" followed by ".site-footer {"
  const baseFooterMatch = content.match(/\/\*\s*Site Footer\s*\*\/[\s\S]*?\.site-footer\s*\{[\s\S]*?\n  \}/);

  if (!baseFooterMatch) {
    console.log(`  WARNING: Could not find base CSS .site-footer block`);
    return;
  }

  const baseFooterBlockStart = content.indexOf(baseFooterMatch[0]);
  const baseFooterBlockEnd = baseFooterBlockStart + baseFooterMatch[0].length;

  // Now find the .footer-socials-icons a:hover and a svg rules to see where the base footer CSS ends
  const afterBaseFooterStart = baseFooterBlockEnd;
  const searchAfter = content.substring(afterBaseFooterStart);

  // Look for .footer-socials-icons a svg pattern in base CSS (not in media query)
  const iconsSvgMatch = searchAfter.match(/\.footer-socials-icons\s+a\s+svg\s*\{[\s\S]*?\n  \}/);

  if (!iconsSvgMatch) {
    console.log(`  WARNING: Could not find .footer-socials-icons a svg rule`);
    return;
  }

  let insertionPoint = afterBaseFooterStart + searchAfter.indexOf(iconsSvgMatch[0]) + iconsSvgMatch[0].length;

  // Check if the rules already exist in base CSS
  const baseCSSSection = content.substring(0, insertionPoint);
  if (baseCSSSection.includes('.footer-newsletter-success { display: none')) {
    console.log(`  SKIPPED: Rules already exist in base CSS`);
    return;
  }

  // Now we need to make sure we're not inside a media query
  // Count opening and closing braces from the start to insertionPoint
  const beforeInsertion = content.substring(0, insertionPoint);
  const mediaQueryMatch = beforeInsertion.match(/@media[^{]*\{/g);
  const openingBraces = (beforeInsertion.match(/\{/g) || []).length;
  const closingBraces = (beforeInsertion.match(/\}/g) || []).length;

  console.log(`  Found insertion point. Brace count before: { = ${openingBraces}, } = ${closingBraces}`);

  // Insert the new rules
  const newContent = content.substring(0, insertionPoint) + rulesToAdd + content.substring(insertionPoint);

  // Write back
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  SUCCESS: Added footer newsletter rules`);
});

console.log('\nDone!');
