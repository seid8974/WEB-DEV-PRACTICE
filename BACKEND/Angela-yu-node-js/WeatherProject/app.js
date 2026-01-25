const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res) =>{

 res.sendFile(__dirname + "/public/index.html");

})

app.post("/",(req,res) => {

    const cityName = req.body.city;
    const apikey = "8e799d72102d302f6c12330e600bde24";
    const units = "metric";

   const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&units='+ units +'&appid='+ apikey;

  https.get(url,(response) => {
    
       response.on("data",(data) => {

            const weatherData = JSON.parse(data);

            const city = weatherData.name;
            const weatherTemp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'

      res.json({
        city: city,
        temp: weatherTemp,
        condition: weatherDescription,
        image: imageUrl
      });
       })
    })
})

app.listen(port,(req,res) => {
    console.log('the port is http://localhost:'+ port);
    console.log("the server is running on port 3000");
})