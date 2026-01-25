const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mySql = require('mysql');
const port = 1234;

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./form-valdation.html'));

const db = mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
})

app.get('/',(req,res) => {
    if(err){
        console.log('error :' + err);
    }
    res.end();
})

app.get('/form-validation',(req,res) => {
    if(err){
        console.log('error :' + err);
    }

    fs.readFile('./form-validation.html',(err,data) => {
        if(err){
            console.log('error :'+ err);
        }
        
        res.end(data);
    })
})


db.connect((err)=>{
    if (err){
        console.log('connection error ' + err);
    }
    console.log("connected to mysql!");
    
    db.query("CREATE DATABASE IF NOT EXISTS hulet",(err)=>{
        if (err){
            console.log('Database creation error ' + err);
        }
        console.log("Database Ready!");

        db.changeUser({database:"hulet"}, (err) => {
            if(err){
                console.log('change user error : ' + err);
            }
            console.log('change user success!');

            let createTable = `
            CREATE TABLE IF NOT EXISTS userForm (
                id int AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(20),
                email VARCHAR(20),
                password VARCHAR(20),
                confirmPassword VARCHAR(20)
            )` ;

            db.query(createTable, (err)=>{
                if(err){
                    console.log('create table error: '+ err);
                }
                console.log('create table succesuss')
            })

        })
  })
})


app.post('/userForm',(req,res) => {
    const {name,email,password,confirmPassword} = body.req;

     
    db.query("INSERT INTO userForm SET ?",(name,email,password,confirmPassword),(err,result) =>{
        if(err){
            console.log('insertion error ' + err);
        }
        console.log('insertion complete!');
    })

})

// app.get('/',(req,res) => {
//     console.log('<h1>aselamualeykum</h1>');
//     res.write('<h1>aselamualeykum</h1>');
// })

// app.get('./form-valdation.html',(req,res) => {
    
// })



app.listen(port,(err) => {
    if(err){
        console.log('error: ' + err);
    }else{
        console.log(`the surver is running on ${port} port!`);
    }
})