/*
    fs module : provides a way to work with file FileSystem

    fs module is core module that comes with Node.js
 */

const fs = require('fs');
//Read file
// fs.readFile("file.txt",'utf8',(err,data)=>{ // callback follows an error first callback patterns
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// });

const content = "Hello World"
//Write file
/* fs.writeFile('example.txt', content,'utf8',(err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('Files written successfully');
}) */

// we have sync method as well, which is synchronous and we dont want htis ideally
/* fs.writeFileSync('example.txt', content,'utf8',(err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('Files written successfully');
}) */

// rename files
/* fs.rename('example.txt','new-example.txt', (err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('Files renamed successfully');
})
 */

// check stats of file
/* fs.stat('file.txt', (err, stats)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(stats.size);
    console.log(stats.isDirectory());
}) */

// create drectory

const directoryPath = 'myDir';
/* fs.mkdir(directoryPath,(err)=>{
    if(err) {
        console.log(err);
        return
    }
    console.log('Directory created successfully');
}) */

// remove directory    
fs.rmdir(directoryPath,{recursive:true} ,(err)=>{
    if(err) {
        console.log(err);
        return
    }
    console.log('Directory removed successfully');
})


