var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('Fine');
var buffer3 = Buffer.from([1, 2, 3, 4]);
 
buffer1.write("Hello There...");
 
var a = buffer1.toString('utf-8');
console.log(a);
 
console.log(Buffer.isBuffer(buffer1));
 
console.log(buffer1.length);
 
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);
 
var Data = bufferDest.toString('utf-8');
console.log(Data);
 
var bufferOld = new Buffer('How_are_you');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());
 

var bufferOne = new Buffer('Hello There...');
var bufferTwo = new Buffer('Fine');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());