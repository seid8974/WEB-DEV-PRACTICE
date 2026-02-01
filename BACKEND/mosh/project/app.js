require('dotenv').config();
const genre = require('./routes/genre.js');
const home = require('./routes/home.js');
const customer = require('./routes/customer.js');
const express = require('express');

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use('/',home);
app.use('/api/genres/',genre);
app.use('/api/customers/',customer);


app.listen(port,() => {
    console.log('the server is running on port :'+port);
})