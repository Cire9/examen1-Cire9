const fs = require('fs');
const path = require('path');

   // Node.js program to demonstrate the
// fs.existsSync() method
  


  
// Check if the file exists
let DirExists = fs.existsSync('log_programa');
console.log( DirExists, "El directori s'ha trobat a la ruta");
if (!DirExists) {
    console.log("Crean directori...")

fs.mkdir(path.join(__dirname, 'log_programa'), (err) => {
    if (err) {
        return console.error('Ja existeix el directori');
    }
    console.log('El directori ha sigut creat');
})};
