// filepath: /Users/siyahkare/code/yayinci-lara-remix-fixed/server.mjs
import path from 'path';
import { createRequire } from 'module';

// Dynamically import the ES module
import('./build/index.js')
  .then(buildModule => {
    console.log('Server started successfully');
  })
  .catch(error => {
    console.error('Failed to start server:', error);
  });