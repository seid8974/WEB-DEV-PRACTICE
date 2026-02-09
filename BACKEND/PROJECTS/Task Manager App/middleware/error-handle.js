const express = require('express');

module.exports = async (err,req,res,next) => {
    console.log(err);
    return res.status(500).send('internal error! or Something failed.');
};
