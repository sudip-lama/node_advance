
const fs=require("fs");

var fetchNotes=()=>{
  try{
    var notesString=fs.readFileSync('note-data.json');
    return JSON.parse(notesString);

  }catch(e){
    return [];
  }
};
var saveNote=(notes)=>{
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
};
var addNote = (title, body) => {

  var notes=fetchNotes();
  var note={
    title,
    body
  };

  var duplicateNotes=notes.filter((note)=>note.title===title);
  if(duplicateNotes.length===0)
  {
      notes.push(note);
      saveNote(notes);
      return note;
  }
  
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  var notes=fetchNotes();
  var keep_notes=notes.filter((note)=> note.title!=title);
  if(keep_notes.length!=0)
  {
    saveNote(keep_notes);
  }
  return notes.length!=keep_notes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
