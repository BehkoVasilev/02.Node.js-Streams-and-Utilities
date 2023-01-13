const fs = require('fs');


const readStrem = fs.createReadStream('./stream/data.txt', {encoding: 'utf-8'});

readStrem.on('data', (chunk) => {
    console.log('-----------------New chunk----------------------');
    console.log(chunk)
    // console.log(chunk.toString());
})

readStrem.on('close', () => {
    console.log('STREAM CLOSED');
})