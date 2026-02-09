const express = require('express');
const mongoose = require('mongoose');
const { customerModel } = require('../models/customer.js');
const { movieModel } = require('../models/movies.js');
const { rentalModel,rentalSchema,validateRental } = require('../models/rental');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/vidlyDB');

router.get('/',async (erq,res) => {
    const retals = await rentalModel.find().sort('-dateOut');
    res.send(retals);
});

router.post('/', async (req,res) => {
    const {error} = validateRental(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const customer = await customerModel.findById(req.body.customerId);
    if(!customer) return rentalModel.status(404).send('the Customer with this Id NOT Found!');

    const movie = await movieModel.findById(req.body.movieId);
    if(!movie) return res.status(404).send("the Movie with this Id NOT Found!");

    if (movie.numberInStock === 0)
        return res.status(400).send('Movie not in stock.');

    const rental = new rentalModel({
        customer:{
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie:{
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
   
    await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);
});

router.get('/:id', async (req,res) => {
    const rental = await rentalModel.findById(req.params.id);
    if(!rental) return res.status(404).send('the rental with this Id not found!');

    res.send(rental);
});

router.put('/:id', async (req,res) => {
    const {error} = validateRental(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const rental = await rentalModel.findById(req.body.id);
    if(!rental) return res.status(404).send('the rental with this Id NOT Found!');

    rental.customer.name = req.body.customer.name;
    rental.customer.phone = req.body.customer.phone;

    rental.movie.title = req.body.movie.title;
    rental.movie.dailyRentalRate = req.body.movie.dailyRentalRate;

    await rental.save();

    res.send(rental);
});

router.delete('/:id', async (req,res) => {
    const rental = await rentalModel.findByIdAndDelete(res.params.id);
    if(!rental) return res.status(404).send('the rental wiyh this Id NOT Found!');

    res.send(rental);
});

module.exports = router;