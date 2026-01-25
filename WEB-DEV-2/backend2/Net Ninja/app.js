let express = require('express');
let bodyParser = require('body-parser');
let mySql = require('mysql');
let port = 4000;

let app = express();
app.use(bodyParser.json);
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    console.log('<h1>aselamualeykum</h1>');
    res.write('<h1>aselamualeykum</h1>');
    res.end('<h1>aselamualeykum</h1>');
})



app.listen(port,(err) => {
    if(err){
        console.log('error: ' + err);
    }else{
        console.log(`the surver is running on ${port} port!`);
    }
})