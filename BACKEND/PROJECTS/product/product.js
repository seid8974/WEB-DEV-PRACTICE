const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./db/connect');
const productJson = require('./product.json');
const Product = require('./model/product');




const start = async () => { 
    try {
        await connectDB(process.env.MONGO_DB);
        console.log('Products inserted successfully!');
        await Product.deleteMany();
        await Product.create(productJson);

        process.exit(0);
    } catch (error) {
        console.log(error);
         process.exit(1);
    }
};

start();