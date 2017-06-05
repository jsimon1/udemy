const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // Send HTML
  // res.send('Hello!');
  // Send JSON Data
  res.send({
    name: 'Jeremy',
    like: [
      'Pizza',
      'Video Games'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errMess: 'There was a problem loading the page'
  });
});

app.listen(3000);
