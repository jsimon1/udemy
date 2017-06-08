const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  user1 = {
    name: "Jeremy Simon",
    age: 19
  };
  user2 = {
    name: 'Austin Smith',
    age: 20
  };
  user3 = {
    name: 'Sean Maltby',
    age: 20
  };
  res.status(200).send([user1, user2, user3]);
});

app.listen(3000);
module.exports.app = app;
