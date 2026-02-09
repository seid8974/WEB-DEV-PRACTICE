const jwt = require('jsonwebtoken');
const Joi = require('joi'); 
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const { userModel } = require('../models/users');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/vidlyDB');

router.post('/', async (req,res) => {
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await userModel.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid Email inserted!');

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('Invalid Passwor pls Try again!');
   

    const token = user.generateAuthToken();

    res.send(token);
});


function validateUser(user){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(user);
};


module.exports = router;