// function log(message){
//     console.log(message);
//     console.log(__filename);
//     console.log(__dirname);
// }

// module.exports = log;




const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 9999;


const server = http.createServer((req,res) => {
    let file = req.url;
    if(file === "/"){
        file = "/index.html";
    }

    var filePath = __dirname + "./bob" + file;
    console.log(filePath);
fs.readFile('filePath', (err, data) => {
    if (err){
        res.writeHead(404);
        res.write("file not found");
        res.end();
    }else{
         res.writeHead(data);
          res.end();
    }
   
});
})


server.listen(port,(err) => {
    if(err){
        console.log("Error : " + err);
    }else{
    console.log("running on server on port :" + port);
    }
})