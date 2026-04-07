# CSS Minify & Unminify Tool

![npm](https://img.shields.io/npm/v/css-minify-unminify)
![downloads](https://img.shields.io/npm/dm/css-minify-unminify)
![license](https://img.shields.io/badge/license-Proprietary-blue)
![status](https://img.shields.io/badge/status-active-success)

A fast CSS minifier and unminifier available as both a web app and CLI tool. Optimize stylesheets for performance or format them for readability.

---

## 🚀 Live Tool
👉 https://www.wikimint.com/tools/css-minify-unminify

---

## 📌 Overview
This tool allows you to:
- Minify CSS to reduce file size and improve load speed
- Unminify CSS to restore readable formatting for editing
- Process CSS instantly without installation or setup

It is designed for developers, designers, and website owners who want quick CSS optimization directly in the browser.

---


## ⚡ Quick Start

### Install CLI

```bash
npm install -g css-minify-unminify
```

### Minify CSS

```bash
css-tool minify -s ./src -t ./dist
```

### Minify with Custom suffix:

```bash
css-tool minify -s ./src -t ./dist --suffix .min
```

### Unminify CSS

```bash
css-tool unminify -s ./src -t ./pretty
```

### 🔧 CLI Options

- `-s, --source → Source directory`
- `-t, --target → Target directory`
- `--suffix → Custom suffix`

**Example:**

```bash
css-tool minify -s ./src -t ./dist --suffix .bundle
```

## ⚡ Features
- Instant CSS minification and formatting
- Browser-based tool (No signup or installation required)
- Clean and simple interface
- Works entirely in the browser
- CLI for batch processing
- Recursive folder support
- Custom output naming using --suffix
- Works offline (CLI)
- Handles large CSS files

## 📈 Why Use This Tool

- No dependencies required for CLI
- Fast and lightweight processing
- Simple command structure
- Works locally without internet
- Suitable for automation and CI/CD workflows

## 🤝 Contributing

We welcome suggestions and improvements. See CONTRIBUTING.md

## 🔐 Security

Report issues responsibly via SECURITY.md

## 📄 License

This project is released under a proprietary license. See LICENSE file.

## 🌐 Author

Developed by [![GitHub](https://img.shields.io/badge/GitHub-Selvakumaran_Krishnan-181717?logo=github)](https://github.com/selvaklnc) **Selvakumaran Krishnan** on behalf of [![GitHub](https://img.shields.io/badge/Organization-Wikimint-181717?logo=github)](https://github.com/wikimint) **Wikimint**