require('dotenv').config();
const mongoose = require('mongoose');

const  connection = async function(url) {
    await mongoose.connect(url)
        .then(console.log('Connected To DB.....'));
};


module.exports  = connection;