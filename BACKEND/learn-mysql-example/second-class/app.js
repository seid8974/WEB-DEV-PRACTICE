const express = require('express');
const mysql2 = require('mysql2');
const port = 1111;

const app = express();



app.get('/',(req,res) =>{
    res.write('aselamualeykum werahmetullah');
    res.end('hi');

    const db = mysql2.createConnection({
        host:"localhost",
        user:"root",
        password:""
    });

    db.connect((err) => {
        if(err){
            console.log('connect error' + err);
        }
        console.log('connection succesus');
    },
        db.query(`CREATE DATABASE IF NOT EXISTS users`,(err) => {
        if(err){
            console.log('error db creation');
        }
        console.log('db creation successuce');
    }),

    db.changeUser({database:users},(err) => {
        if(err){
            console.log(err);
        }
        console.log('change user');
    })
    );
})

app.get('/create',(req,res) => {

})

app.listen(port,(err) => {
    if(err){
        console.log('server listening error ' + err);
    }
    console.log(`the server is listening on ${port} port`);
})