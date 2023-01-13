const fs = require('fs');

const writeStream = fs.createWriteStream('./stream/output.txt', {encoding: 'utf-8', flags: 'a'});

const chunk1 = 'Pesho ';
const chunk2 = 'Gosho ';
const chunk3 = 'Nesho ';
const chunk4 = 'Chesho ';

writeStream.write('\n' + chunk1);
writeStream.write(chunk2);
writeStream.write(chunk3);
writeStream.write(chunk4);

writeStream.on('close', () => {
    console.log('STOP');
})
writeStream.end();