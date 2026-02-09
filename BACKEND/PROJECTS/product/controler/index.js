const express = require('express');
const Product = require('../model/product');
const { Query } = require('mongoose');

const getAllProducts = async (req,res) => {
    const { feature,company,name } = req.query;
    let queryObject = {};

    if(feature) {
        queryObject.feature = feature ==='true'? true:false;
    }
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:`^${name}$`, $options:'i'};
    }
    const product = await Product.find(queryObject);
    if(!product) return res.status(404).json("Product can't found!");

    res.json({product, Count:product.length});
   
};

const getAllProductStatic = async (req,res) => {
     const product = await Product.find();
    if(!product) return res.status(404).json("Product can't found!");

    res.json({product, Count:product.length});
};


module.exports = { getAllProducts,getAllProductStatic };