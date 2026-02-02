import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const frDir = path.join(distDir, 'fr');

// Create /fr directory if it doesn't exist
if (!fs.existsSync(frDir)) {
  fs.mkdirSync(frDir, { recursive: true });
}

// Copy index.fr.html to /fr/index.html
const frHtmlSource = path.join(__dirname, 'index.fr.html');
const frHtmlDest = path.join(frDir, 'index.html');

if (fs.existsSync(frHtmlSource)) {
  fs.copyFileSync(frHtmlSource, frHtmlDest);
  console.log('✓ Copied French index.html to /fr/');
}

// Create CNAME file for custom domain
const cnameFile = path.join(distDir, 'CNAME');
fs.writeFileSync(cnameFile, 'dbtree.app');
console.log('✓ Created CNAME file');

// Create 404.html for GitHub Pages SPA routing
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

if (fs.existsSync(indexHtml)) {
  // Copy index.html to 404.html for client-side routing fallback
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log('✓ Created 404.html for SPA routing');
}

console.log('✓ Post-build setup complete!');
