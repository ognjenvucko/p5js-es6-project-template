# ES6 project template

### About
This project template aims to make p5js projects easy to create and manage.

It comes with Babel and RequireJS support. Uses Gulp tasks to prepare distribution assets.

### Setup
Once you clone repository using run:

```npm install```

### Basic usage
* Place your JS code under ```src/app``` directory
* ```main.js``` is entry point of your application
* Use RequireJS ```define``` and ```require``` to define and include modules in your application
* Run ```gulp``` command to transpile ES6 and copy resources to ***dist*** directory
* Open ```dist/index.html``` in browser of choice

### Examples

Example projects are located under `examples` directory.

To build example project `cd` into project folder and run:

```
$ cd examples/tank
$ npm install
$ gulp
```
To run the example code open ***index.html*** from `dist` folder in your browser.

Check out [Live demo code](https://ognjenvucko.github.io/p5js-es6-project-template/examples/tank/src/index.html)
