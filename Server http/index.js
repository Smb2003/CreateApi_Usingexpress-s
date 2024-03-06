const http = require('http')
const port = 3000; 
const server = http.createServer((req,res)=>{
    return res.end('Server responded!');
})

server.listen(port, ()=>{
    console.log(`HTTP Server is running!,Port ${port}`);
})