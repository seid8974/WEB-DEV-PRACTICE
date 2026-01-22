const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req,res)=>{

    const fileUrl = req.url;
    console.log(fileUrl);

    const parseUrl = url.parse(fileUrl,true);
    console.log(parseUrl);

    const filePath = parseUrl.path;


   if(filePath === "/index.html"){

     var requistedFile = __dirname + filePath;

     const readFile = fs.readFile(requistedFile,(err,content)=>{
          if(err){
               res.writeHead(404);
               res.end();
          }else{
                res.writeHead(200,{"content-type":"text/html"});
               res.end(content);
          }
     })

   }else{
        res.write("<h1> page not found</h1>");
        res.end();
   }
})

server.listen(1234,()=>{
    console.log("server running ....");
})