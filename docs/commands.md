# Commands Reference

## Structure
css-tool <command> [options]

## minify
css-tool minify -s <source> -t <target>

## unminify
css-tool unminify -s <source> -t <target>

## Options
--source, -s   Input directory
--target, -t   Output directory
--suffix       Custom suffix

## Output
minify   -> .min.css
unminify -> .pretty.css
