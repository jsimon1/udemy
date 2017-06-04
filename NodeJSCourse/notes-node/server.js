//Basic note-taking application, can add, list, read, and remove notes

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//CLI Option Definitions
var titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

var bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

//CLI Yargs init
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var cmd = argv._[0];
console.log('Command:',cmd);

//Command line handlers
if (cmd === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.printNote(note);
  }
  else {
    console.log("Error creating note");
  }
} else if (cmd === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.printNote(note));
} else if (cmd === 'read'){
  console.log('Note found');
  var note = notes.readNote(argv.title);
  if (note) {
    notes.printNote(note);
  }
  else {
    console.log("Note not found");
  }
} else if (cmd === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}

// Basic Demonstration of Node
//
// const os = require('os');
//Using OS API
// var user = os.userInfo();
//
//Using my own module
// var res = notes.addNote();
// var addRes = notes.add(5,6);
// console.log(addRes);
//
// //Using Lodash
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
//
// var filteredArray = _.uniq(['Mike', 1, 'Andrew',1,2,3,4]);
// console.log(filteredArray);
//
//Template literals examples
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}` , function (err){
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });
