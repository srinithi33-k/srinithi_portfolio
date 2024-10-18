// server.js
const https = require('https');
const fs = require('fs');
const express = require('express');  // Use this if you are using Express

const app = express();  // Your Express app

// Path to your SSL certificate and key
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Set up a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Create an HTTPS server
// https.createServer(options, app).listen(3001, () => {
//   console.log('HTTPS Server running on port 3000');
// });

https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS Server running on port 3000');
});
