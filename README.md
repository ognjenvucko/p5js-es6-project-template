#ES6 project template

###About
This project template aims to make p5js projects easy to create and manage.

It comes with Babel and RequireJS support. Uses Gulp tasks to prepare distribution assets.

###Setup
Once you clone repository using Git/Mercurial run:

```npm install```

###Basic usage
* Place your JS code under ```src/app``` directory
* ```main.js``` is entry point of your application
* Use RequireJS ```define``` and ```require``` to define and include modules in your application
* Run ```gulp``` command to transpile ES6 and copy resources to ***dist*** directory
* Open ```dist/index.html``` in browser of choice
