const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/',(req,res) => {
    // let num1 = Number(req.body.num1);
    // let num2 = Number(req.body.num2);
    // let result = num1 + num2;

    let {num1,num2} = req.body;
    
    let result = Number(num1) + Number(num2);
    
    res.send(`The Sum Of The Two Numbers Is : ${result}`);
})

app.get('/bmicalculator',(req,res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
})

app.post('/bmicalculator',(req,res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let yourBmi = weight / (height * height);
    
    res.send(`Your BMI Is : ${yourBmi}`);
})

app.listen(port,(err) => {
    if(err) {
        console.log("Error : "+ err);
    }else  {
    console.log(`the surver is listenning on the port of ${port}`);
    }
   
})