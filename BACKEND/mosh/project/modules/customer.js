 const mongoose = require('mongoose');
  const Joi = require('joi');

   const customerSchema = new mongoose.Schema({
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
 })


 const Customer = mongoose.model('Customer',customerSchema);


  function validateCustomer(customer){
        const schema = Joi.object({
            name: Joi.string().min(5).required(),
            phone: Joi.string().min(5).required(),
            isGold: Joi.boolean()
        });
        return schema.validate(customer);
    };



    module.exports.customerModel = Customer;
    module.exports.validateCustomer = validateCustomer;