
const fs=require("fs");

var addNote = (title, body) => {
  
  var notes=[];

  try{
    var notesString=fs.readFileSync('note-data.json');
    notes=JSON.parse(notesString);

  }catch(e){

  }
  
  var note={
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
  console.log('Note added to the file');
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
