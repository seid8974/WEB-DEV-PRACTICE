const express = require('express');
const { getAllTasks,createTask,getSpecificTask,updateTask,deleteTask} = require('../controller/task');
const router = express.Router();

router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    .get(getSpecificTask)
    .patch(updateTask)
    .delete(deleteTask);



module.exports = router;