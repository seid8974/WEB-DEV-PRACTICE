const express = require('express');
const home = express.Router();
const homePage = require('../controller/home');

module.exports = function(){
    home.route('/').get(homePage );
};