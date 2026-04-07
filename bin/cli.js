#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { minifyCSS, unminifyCSS } = require('../lib/cssProcessor');

// ---- Args ----
const args = process.argv.slice(2);

// First argument = command
const command = args[0];

// Remove command from args
const flags = args.slice(1);

let sourcePath = null;
let targetPath = null;
let suffix = '';

// ---- Parse flags ----
for (let i = 0; i < flags.length; i++) {
  const arg = flags[i];

  if ((arg === '--source' || arg === '-s') && flags[i + 1]) {
    sourcePath = flags[i + 1];
  }

  if ((arg === '--target' || arg === '-t') && flags[i + 1]) {
    targetPath = flags[i + 1];
  }

  if (arg === '--suffix' && flags[i + 1]) {
    suffix = flags[i + 1];
  }
}

// ---- Validate command ----
if (!command || !['minify', 'unminify'].includes(command)) {
  console.log(`
Usage:
  css-tool <command> [options]

Commands:
  minify     Minify CSS files
  unminify   Format CSS files

Options:
  -s, --source   Source folder
  -t, --target   Target folder
  --suffix       Custom suffix (example: .min)

Examples:
  css-tool minify -s ./src -t ./dist
  css-tool unminify -s ./src -t ./pretty
  css-tool minify -s ./src -t ./dist --suffix .min
`);
  process.exit(1);
}

// ---- Validate paths ----
if (!sourcePath || !targetPath) {
  console.error('❌ Source and target paths are required.');
  process.exit(1);
}

const srcRoot = path.resolve(sourcePath);
const destRoot = path.resolve(targetPath);

if (!fs.existsSync(srcRoot)) {
  console.error(`❌ Source path does not exist: ${srcRoot}`);
  process.exit(1);
}

let fileCount = 0;

// ---- Processing ----
function processDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      processDirectory(srcPath, path.join(dest, item));
    } 
    else if (item.endsWith('.css')) {
      try {
        const css = fs.readFileSync(srcPath, 'utf8');

        // ---- Apply command ----
        const outputCSS =
          command === 'unminify'
            ? unminifyCSS(css)
            : minifyCSS(css);

        // ---- Filename handling ----
        let newFileName = item;

        if (suffix) {
          newFileName = item.replace(/\.css$/, `${suffix}.css`);
        } else {
          if (command === 'minify') {
            newFileName = item.replace(/\.css$/, '.min.css');
          } else if (command === 'unminify') {
            newFileName = item.replace(/\.min.css$/, '.css');
          }
        }

        const destPath = path.join(dest, newFileName);

        fs.writeFileSync(destPath, outputCSS, 'utf8');

        fileCount++;
        console.log(`✔ ${command}: ${srcPath} → ${destPath}`);
      } catch (err) {
        console.error(`❌ Error: ${srcPath}`);
        console.error(err.message);
      }
    }
  });
}

// ---- Run ----
console.log(`\n🚀 Running CSS Tool (${command})...\n`);

processDirectory(srcRoot, destRoot);

console.log(`\n✅ Done! ${fileCount} file(s) processed.`);
console.log(`📁 Output: ${destRoot}\n`);