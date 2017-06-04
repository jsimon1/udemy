const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var printNote = (note) => {
	//Debugger keyword pauses debugger on continue
	debugger;
  console.log('--');
  console.log('Title:' + note.title);
  console.log('Body:' + note.body);
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title );

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var readNote = (title) => {
	var notes = fetchNotes();
	var foundNote = notes.find((note) => note.title === title);
	return foundNote;
}

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
}

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote,
	printNote
}

//
//If the export.funcName is different from the function name in the implementation, you can map it to its implementation name via key-value pairs
//Also outside of ES6, you must be explicit even with the same name
// module.exports = {
// 	addNotes: addNote,
// 	getAll: getAll
// }
//
// var note = {
//   title: title,
//	 body: body
// }
//


//
// module.exports.addNote = function () {
// 	console.log('addNote');
// 	return 'New note';
// }
//
//
// Anonymous functions like the one above can be rewritten in ES6 to be an arrow function:
// module.exports.addNote = () => {
// 	console.log('addNote');
// }
//
