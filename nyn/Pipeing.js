var fs = require("fs");

var readerStream = fs.createReadStream('example.txt');

var writerStream = fs.createWriteStream('example1.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");