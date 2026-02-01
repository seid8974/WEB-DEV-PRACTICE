 const  { customerModel,validateCustomer } = require('../modules/customer.js');
 const mongoose = require('mongoose');
 const express = require('express');
 const router = express.Router();

 mongoose.connect('mongodb://localhost:27017/vidlyDB');


 router.get('/',async (req,res) => {
    const customer = await customerModel.find();
    res.send(customer);
 })

 router.get('/:id',async (req,res) => {
    const customer = await customerModel.findById(req.params.id);

    if(!customer) return res.status(404).send('the Customer with this ID Not Found!');

    res.send(customer);
 })


 router.post('/',async (req,res) => {
    const {error} = validateCustomer(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const customer = new customerModel({
         name: req.body.name,
         phone: req.body.phone,
         isGold: req.body.isGold
    });
    
    await customer.save();
    res.send(customer);
 })

router.put('/:id',async (req,res) => {
    const {error} = validateCustomer(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const customer = await customerModel.findByIdAndUpdate(req.params.id,{name: req.body.name},{new:true});
  
    if(!customer) return res.status(404).send('the Customer with this ID Not Found!');
 
 
    res.send(customer);
})

router.delete('/:id',async (req,res) => {
    const customer = await customerModel.findByIdAndDelete(req.params.id);
   
    if(!customer) return res.status(404).send('the Customer with ID is Not Found!');

   
    res.send(customer);
})
   



 module.exports = router;