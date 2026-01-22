// const http = require('http');

// const myServer = http.createServer(function(req,res){

//     res.write(" aselamualeykum seid");
//     res.end("\n the End of the server!");
// })


// myServer.listen(1234,function(){
//     console.log("the server is running....");
// })






const http2 = require('http');

const myServer2 = http2.createServer(function(req,res){
    console.log(res.url);

    if(req.url === "/"){
        res.write("<h1>This is home page</h1>");
        res.end();
    }else if(req.url === "/about"){
        res.write(" <h1>This is about page</h1>");
        res.end();
    }else{
        res.write("<h1>page not found</h1>");
        res.end();
    }


})
const port = 4321;

myServer2.listen(port,function(){
    console.log(`the server is running on the Port:http://localhost:${port}`);
})