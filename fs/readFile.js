const fs = require('fs');
const fsp = require('fs/promises');

//Synchronous reading
const text = fs.readFileSync('./fs/text.txt');
console.log(text.toString());
console.log("Read from file");

//Asynchronous reading 
fs.readFile('./fs/text.txt', (err, data) => {
    if (err) {
        return;
    }

    console.log(data.toString());
});
console.log("Read from file");

//Asynchronous reading with promises
fsp.readFile('./fs/text.txt', {encoding: 'utf-8'})
    .then(result => {
        console.log(result);
    })
console.log("Read from file");

fs.readdir('./pubSub', (err, files) => {
    if (err) {
        return
    }
    console.log(files.join(", "));
});
