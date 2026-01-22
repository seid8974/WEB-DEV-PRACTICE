const express = require('express');
const mySql = require('mysql');
const port = 3002;

const app = express();

const seid4createConnection = mySql.createConnection(
    {
        host:"localhost",
        user:"seid4",
        password:"seid4",
        database:"seid4"
    }
);


seid4createConnection.connect((err) => {
    if(err){
        console.log('the error to connect database is : '+ err);
    }else{
        console.log("connected!!");
    }
});

app.listen(port,(err) => {
    if(err){
        console.log(`the server listenning Error is on: ${port} port`)
    }else{
        console.log(`the server listenning  on: ${port} port`)
    }
})