require('dotenv').config();
const router = require('./routes/index.js');
const home = require('./routes/home.js');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',home);
app.use('/api/genres/',router);



app.listen(port,() => {
    console.log('the server is running on port :'+port);
})