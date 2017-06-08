//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Object destructuring
// var user = {name: 'Jeremy', age: 25};
// var {name} = user;
// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  // Instead of if else, you can return for the error to handle it at the beginning, and have it end there
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Jeremy Simon',
    age: 19,
    location: 'Montvale'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(res.ops[0]._id.getTimestamp());
  });

  db. close();

});
