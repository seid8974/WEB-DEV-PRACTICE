const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const { userModel,validateUser } = require('../models/users');
const router = express.Router();

const saltRounds = 10;

mongoose.connect('mongodb://localhost:27017/vidlyDB');

router.get('/me', auth, async (req,res) => {
    const user = await userModel.findById(req.user._id).select('-password');
    res.send(user);
});

router.post('/', async (req,res) => {
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await userModel.findOne({email: req.body.email});
    if(user) return res.status(400).send(' User Already Registered!');

    user = new userModel(_.pick(req.body, ['name','email','password']));
    
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(_.pick(user, ['_id','name','email']));
});




module.exports = router;