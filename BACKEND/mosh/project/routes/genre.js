const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { genreModel,validateGenre} = require('../modules/genre.js');

mongoose.connect('mongodb://localhost:27017/vidlyDB');

// const genreSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: [3, 'Username must be at least 3 characters'],
//         maxlength: [50, 'Username cannot exceed 50 characters']
//     }
// })

// // const genres = [
// //     {id:1,name:"Action"},
// //     {id:2,name:"Horror"},
// //     {id:3,name:"Romance"}
// // ];

// const Genre = mongoose.model('Genre',genreSchema);

router.get('/',async (req,res) => {
    const genres = await genreModel.find();
    res.send(genres);
})

router.get('/:id',async (req,res) => {
    const genre = await genreModel.findById(req.params.id);
    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('the genre with this ID Not Found!');

    res.send(genre);
})


router.post('/',async (req,res) => {
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = new genreModel({
         name: req.body.name
    });

    // const genre = {
    //     id: genres.length + 1,
    //     name: req.body.name
    // }

    //  genres.push(genre);
    
    await genre.save();
    res.send(genre);
})

router.put('/:id',async (req,res) => {
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await genreModel.findByIdAndUpdate(req.params.id,{name: req.body.name},{new:true});

    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('the genre with this ID Not Found!');
 

    // genre.name = req.body.name;
    res.send(genre);
})

router.delete('/:id',async (req,res) => {
    const genre = await genreModel.findByIdAndDelete(req.params.id);

    // const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('the genre with ID is Not Found!');

    // const index = genres.indexOf(genre); 
    // genres.splice(index,1);

    res.send(genre);
})


// function validateGenre(genre){
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     });
//     return schema.validate(genre);
// };



module.exports = router;