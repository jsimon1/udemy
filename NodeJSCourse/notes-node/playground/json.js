// Javascript object notation obj to its string version
// var obj = {
//   name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// String of JSON then converted into actual object type
// var personString = '{"name":"Andrew","age": 25}';
// var jsonObj = JSON.parse(personString);
// console.log(typeof jsonObj);
// console.log(jsonObj);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: "Some body"
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
