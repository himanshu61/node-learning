// create a server

const http = require("http");
const server = http.createServer((req, res)=>{
    // handling incoming request
    //res.setHeader("Content-type","text/plain"); //mime types
    //res.write('Hellow World');
    res.setHeader("Content-type","text/html"); //mime types
    res.write("<h1>Hello World1</h1>")
    res.write("<h1>Hello World</h1>")
    res.write("<h1>Hello World1</h1>");
    res.end();

})

const host = "localhost";
const port ="3000";
server.listen(port,host, ()=>{
    console.log(`server is up on http://${host}:${port}`);
})