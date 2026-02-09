const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
    name: String,
    active: Boolean,
    completed: Boolean
});


const Task = mongoose.model('Task', taskSchema);

const validate = function(task){
    const schema = Joi.object({
        name: String().min(3).required()
    });

    return schema.validate(task);
}



module.exports.Task = Task;
module.exports.validate = validate;