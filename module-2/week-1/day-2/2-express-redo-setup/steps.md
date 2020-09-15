$ npm init -y
$ npm install express hbs
$ touch index.js
$ mkdir public public/img public/js views views/partials
$ touch public/css/index.css
$ touch public/js/test.js


## create a dev script in package.json ##
"dev": "nodemon ./index.js -e .hbs,.js"