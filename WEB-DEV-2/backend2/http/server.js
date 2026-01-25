const http = require('http');
const fs = require('fs');
const { ok } = require('assert');

const server = http.createServer((req,res) => {
    console.log('server created!');
    // console.log(req);
    // console.log(req.url,req.method);
    // res.setHeader('content-type','text/plain');
    // res.write('aselamualeykum s!');


    //  res.setHeader('content-type','text/html');
    //  res.write('<head><link rel="stylesheet" href=""></link>');
    //  res.write('<h2>aselamualeykum s!</h2>');
    //  res.write('<h2>wealeykumselam werahmetullah!</h2>');
   

    // res.setHeader('content-type','text/html');
    // fs.readFile('./Calculator/index.html',(err,data) => {
    //     if(err){
    //         console.log(err);
    //     }else{
    //         // res.write(data);
              //  res.end();
    //         res.end(data);
    //     }  
    // })

    
    let path = './examples/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location','/about.html');
            res.end();
            break;
         default:
            path += '/404.html';
            res.statusCode = 404;
            break;
         }

       res.setHeader('content-type','text/html');
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err);
        }else{
            // res.write(data);
            res.end(data);
        }
    })

                 //status code
        /*    200-ok
            301-resource moved
            404-not found
            500-internal server error
        */


    // res.end();
    // res.end('\n wealeykumselam werahmetullah!');
})


server.listen(2000,'localhost',() => {
    console.log('listening on server 2000');
})

 