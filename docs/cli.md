# CLI Usage

## Installation
npm install -g css-minify-unminify

## Usage
css-tool <command> [options]

## Commands
minify   Compress CSS
unminify Format CSS

## Options
-s, --source   Source folder
-t, --target   Target folder
--suffix       Custom suffix

## Examples
css-tool minify -s ./src -t ./dist
css-tool unminify -s ./src -t ./pretty
css-tool minify -s ./src -t ./dist --suffix .min
