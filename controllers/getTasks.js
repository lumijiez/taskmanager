const taskModel = require("../models/taskModel")

const getTasks = async (req, res, next) => {
    try {
        const tasks = await taskModel.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(400).json({msg: error.errors.name.message})
    }
}

module.exports = getTasks