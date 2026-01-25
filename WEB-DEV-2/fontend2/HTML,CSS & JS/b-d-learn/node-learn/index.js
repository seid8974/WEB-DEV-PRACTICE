// const fs = require('fs');
// console.log(fs);

// const readfile = fs.readfs();
// const showFile=function(err,data){
//     if(err){
//         console.log('error',err);
//         return;
//     }

//     console.log(data);
// }




const http = require('http');  

const myServer = http.createServer(function(req,res){

    res.write("aselamualeykum seid");
    res.end("\nthe end of the server!");
});



myServer.listen(1234,function(){
    console.log("server running in the port of 1234...");
})