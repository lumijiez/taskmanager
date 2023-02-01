const Task = require('../models/taskModel')

const createTask = async (req, res, next) => {
    try {
        const newTask = await Task.create({name: req.body.name, completed: false})
        res.status(201).send("Success!")
    } catch (error) {
        res.status(400).json({msg: error.errors.name.message})
    }
}

module.exports = createTask