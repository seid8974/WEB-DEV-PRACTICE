const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const { Task, validate } = require('../model/task-schema');




const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    if(!tasks) return res.status(404).send(' task not found!');
    
    res.json(tasks);
};

const createTask = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const task = new Task({
        name: req.body.name
    });

    await task.save();
    res.json(task);
};

const getSpecificTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    res.json(task);
};

const updateTask = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const task = await Task.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );

    if (!task) return res.status(404).send('Task not found');
    res.json(task);
};

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    res.json(task);
};

module.exports = {
    getAllTasks,
    createTask,
    getSpecificTask,
    updateTask,
    deleteTask
};
