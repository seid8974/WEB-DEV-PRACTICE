const http =require('http');
const fs =require('fs');
const url =require('url');

const createServerReadHtml = http.createServer(function(req,res){
    let filePath = req.url;
    console.log("file Path1 =>:" + filePath);

    if(filePath === "/"){
        filePath = '/index.html';
        console.log("file Path2 =>:" + filePath);
    }

    let requistedUrl = "./bob" + filePath;

   fs.readFile(requistedUrl,(err,content)=>{
      if(err){
         requistedUrl = "./bob/not-found.html";

        fs.readFile(requistedUrl,(_err,content)=>{  
          
                res.writeHead(400,{"content-type":"text/html"});
                res.write(content);
                res.end();
        
        })
      }else{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(content);
            res.end();
      }
    })


})



createServerReadHtml.listen(4000,()=>{
    console.log("running on 4000 port");
})