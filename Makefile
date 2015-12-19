main:
	browserify src/index.js | uglifyjs -o lib/index.min.js
