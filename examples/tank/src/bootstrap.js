requirejs.config({
  paths: {
    'p5': 'lib/p5'
  }
});

// Call application entry point
require(['app/main']);
