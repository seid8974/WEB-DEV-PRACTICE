const express = require('express');
const bodyParser = require('body-parser');

const port = 9999;
const app = express();

app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("aselamualeykum seid");
})

app.get("/contact",(req,res) => {
    res.send("my email is example@gmail.com");
})

app.get("/about",(req,res) => {
    res.send("my name is seid. i am a software enginnering student!!!");
})

app.get("/hobies",(req,res) => {
    res.send("<ul><li>food</li><li>code</li><li>playing</li><li>chat</li></ul>");
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`surver is listenning on ${port} port ....`);

})