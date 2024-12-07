const fs = require('fs');

const sourceFilePath = "./dir/source.txt";
const destinationFilePath = "./dir/destination.txt";

const readStream = fs.createReadStream(sourceFilePath);

const writeStream = fs.createWriteStream(destinationFilePath);

readStream.pipe(writeStream);
// error is event is listened by readStream
readStream.on('error',(err)=> {
    console.log("some error ocurred while reading", err)
})

writeStream.on('error',(err)=> {
    console.log("some error ocurred while writing", err)
})

readStream.on('close', ()=>{
    console.log("readStream closed successfully");
})
// finish is event listened by writeStream
writeStream.on('finish', ()=>{
    console.log("Write finished successfully");
})
