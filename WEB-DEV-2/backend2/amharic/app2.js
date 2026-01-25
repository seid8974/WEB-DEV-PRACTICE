const express = require('express');
const fs = require('fs');

const port = 4444;
const app = express();

app.get('/',(req,res) => {

    res.end('<h1>aselamualeykum</h1>')
})

app.get('/html',(req,res) => {
    let path =__dirname + '/form-valdation.html';

app.use(express.static('./form-valdation.html'));
})


app.listen(port,(err) => {
    if(err){
        console.log('error ' + err);
    }else{
        console.log(`the server is listening on ${port} port`);
    }
})
