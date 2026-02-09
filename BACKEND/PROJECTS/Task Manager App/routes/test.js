const express = require('express');
const test = express.Router();    


    test.get('/', (req, res) => {
        console.log('GET /tasks hit');
        res.send('OK');
    });


    module.exports = test;