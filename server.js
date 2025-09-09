const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Route handler for "Hello, World!" - accessible at root path
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello, World!\n');
});

// Additional route for "Hello, World!" - accessible at /hello path
app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello, World!\n');
});

// Route handler for "Good evening" - accessible at /evening path
app.get('/evening', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Good evening');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
