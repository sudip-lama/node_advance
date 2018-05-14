console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
  var note=notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note created!!");
    console.log("Note '"+argv.title+"' is created");
  }else{
    console.log("Note '"+argv.title+"' alread exist !!");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  var title=notes.removeNote(argv.title);
  if(title){
    console.log("'"+title+"' note deleted !!");
  }else{
    console.log("'"+argv.title+"' note not found !!")
  }
} else {
  console.log('Command not recognized');
}
