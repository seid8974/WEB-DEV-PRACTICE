const express = require('express');
const bodyParser = require('body-parser');
const port=9000;

const app = express();


app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("aselamualeykum there!")
})

app.post('/signup',(req,res) => {
    const {email,password,fname,lname} = req.body;
    res.send(300);
})

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    res,send("you are logged1");
})

app.listen(port,(err) => {
    if(err){
        console.log(`Error : ${err}`);
    }else{
        console.log(`the surver is running on port of : ${port}`);
    }
})