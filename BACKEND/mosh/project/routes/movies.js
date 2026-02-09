const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { movieModel,validateMovie} = require('../models/movies.js');
const { genreModel } = require('../models/genre.js');

mongoose.connect('mongodb://localhost:27017/vidlyDB');

router.get('/',async (req,res) => {
    const movie = await movieModel.find().sort('name');
    res.send(movie);
});

router.get('/:id',async (req,res) => {
    const movie = await movieModel.findById(req.params.genreId);
    if(!movie) return res.status(404).send('the genre with this ID Not Found!');

    res.send(movie);
});

router.post('/',async (req,res) => {
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  

    const genre = await genreModel.findById(req.body.genreId);
    if(!genre) return res.status(404).send('the genre with this ID Not Found!');

    const movie = new movieModel({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });


    
    await movie.save();
    res.send(movie);
});

router.put('/:id',async (req,res) => {
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const movie = await movieModel.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    },{new:true});
    
    if(!movie) return res.status(404).send('the genre with this ID Not Found!');
 
   
    res.send(movie);
});

router.delete('/:id',async (req,res) => {
    const movie = await movieModel.findByIdAndDelete(req.params.id);
   
    if(!movie) return res.status(404).send('the genre with ID is Not Found!');

    res.send(movie);
});

module.exports = router;