const express = require('express');
const mongoose = require('mongoose');
const Joi =require('joi')

const rentalSchema = new mongoose.Schema({
    customer:{
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: [3, 'Username must be at least 3 characters'],
                maxlength: [50, 'Username cannot exceed 50 characters']
            },
            phone: {
                type: String,
                required: true,
                minlength: (5),
                maxlength: (50)
            },
            isGold:{
                type: Boolean,
                default: false
            }
        }),
        requirede:true
    },
    movie:{
        type: new mongoose.Schema({
            title:{
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate:{
                type:Number,
                required: true,
                min:0,
                max:255
             }
        }),
        required:true
    },
    dateOut:{
        type: Date,
        required: true,
        default: Date.now
    },
    dateRetured:{
        type: Date
    },
    rentalFee:{
        type: Number,
        min: 0
    }
});


const Rental = mongoose.model('Rental', rentalSchema);


function validateRental(rental){
    const schema = Joi.object({
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    });

    return schema.validate(rental);
};

module.exports.rentalModel = Rental;
module.exports.rentalSchema = rentalSchema;
module.exports.validateRental = validateRental;