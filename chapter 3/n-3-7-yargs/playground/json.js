const fs=require('fs');
/*
var originalContent={
 title:"Node advance",
 body:"Trying to learn node"
};
fs.writeFileSync('node.json',JSON.stringify(originalContent));
*/

var noteContent=fs.readFileSync('node.json');
var note=JSON.parse(noteContent);
console.log(typeof note);
console.log("body of note:"+note.body);