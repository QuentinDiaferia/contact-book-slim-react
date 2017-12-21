public/styles/main.css: assets/styles/*.scss
	@ node_modules/.bin/node-sass assets/styles/main.scss -o public/styles/ --source-map public/styles/

styles:
	@ rm -rf public/styles && mkdir -p public/styles
	@ make public/styles/main.css
