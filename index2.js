const { createReadStream, createWriteStream } = require('fs');
const csv = require('csvtojson');

const readStream = createReadStream('./books.csv');
const writeStream = createWriteStream('./books.txt');

readStream
    .pipe(csv())
    .on('data', data => {
        const book = JSON.parse(data);
        delete book.Amount;
        console.log(book);
        writeStream.write(`${JSON.stringify(book)}\n`);
    });