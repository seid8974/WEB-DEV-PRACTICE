
 // // Learn PATH ....

// const path = require('path');

// const pathObj = path.parse(__filename);

// console.log(pathObj);




 // // Learn OS ....
// const os = require('os');

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(totalMemory);
// console.log(freeMemory);



//  // Learn fs ....

// const fs = require('fs');

// const readDirectory = fs.readdir('./',(err,files)=>{
//     if(err) console.log(`Error : ${err}`);
//     else
//         console.log(`File : ${files}`);
    
// });




//  // Learn EVENTS ....

// const eventEmitter = require('events');
// const emmiter = new eventEmitter();

//     emmiter.on("message",()=>{
//         console.log("hi there !");
//     })

//     emmiter.emit("message");





//  // Learn HTTP ....

// const http = require('http');

// const server = http.createServer((req,res) =>{
//     let file = req.url;
//     if(file === "./"){
//         file = "/app.js";
//     }

// });


// server.listner(4444,()=>{
//     console.log(" running the server on 4444 port!!");
// })