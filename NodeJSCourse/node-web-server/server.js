const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

// Express middle-ware (express works one way, we want some things about it to change)
app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  // Send HTML
  // res.send('Hello!');
  // Send JSON Data
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errMess: 'There was a problem loading the page'
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
