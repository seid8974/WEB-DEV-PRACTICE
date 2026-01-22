const express = require('express');
const https = require('https');

const app = express();

app.get("/",(req,res) =>{


   const url = "https://official-joke-api.appspot.com/random_joke";



  https.get(url,(response) => {
        console.log(response.statusCode);

       response.on("data",(data) => {
        const weatherData = JSON.parse(data);
        const id = weatherData.id;
        const type = weatherData.type;

       })

    })


    res.send("the server is up and running");
})

app.listen(3000,(req,res) => {
    console.log("the server is running on port 3000");
})