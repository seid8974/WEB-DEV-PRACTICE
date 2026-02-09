const error = require('../middleware/error.js');
const genre = require('../routes/genre.js');
const home = require('../routes/home.js');
const customer = require('../routes/customer.js');
const movie = require('../routes/movies.js');
const rental = require('../routes/rental.js');
const user = require('../routes/users.js');
const auth = require('../routes/auth.js');
const express = require('express');

    module.exports = function (app){
        app.use(express.json()); 
        app.use(express.urlencoded({extended:true})); 
        app.use('/',home);
        app.use('/api/genres',genre);
        app.use('/api/customers',customer);
        app.use('/api/movies', movie);
        app.use('/api/rental', rental);
        app.use('/api/users', user);
        app.use('/api/auth', auth);
        app.use(error);
    }