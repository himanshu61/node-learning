/*
path module - provides utilities for working with files and directory path across different operating 
file path differ from one OS to another
for example- windows uses backslash and unix  uses forward slash (/)
./ --> it means current folder
 */


const path = require('path');

const fullPath = path.join('folder','subfolder', 'file.txt');
console.log(fullPath);

const fileName = path.basename(fullPath);
console.log(fileName);

const extName = path.extname(fullPath);
console.log(extName);

// gives complete path info
const pathInfo = path.parse(fullPath);
console.log(pathInfo);

//const normalisedPath = path.normalize('path/to/../file.txt'); // relative path might have ../.
const normalisedPath = path.normalize('/path/./to/../to/../../file.txt'); // relative path might have ../.
console.log('normalised path - ',normalisedPath);
