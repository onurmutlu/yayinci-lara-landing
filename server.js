// CommonJS wrapper for the ES module build file
const path = require('path');
const { createRequire } = require('module');
const require = createRequire(import.meta.url);

// Dynamically import the ES module
import('./build/index.js')
  .then(buildModule => {
    console.log('Server started successfully');
  })
  .catch(error => {
    console.error('Failed to start server:', error);
  });