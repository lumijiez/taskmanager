const { findById } = require("../models/taskModel")
const taskModel = require("../models/taskModel")

const deleteTask = async (req, res, next) => {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({msg: `Null task with id ${req.params.id}`})
        res.status(200).json({msg: "Success deletion"})
    } catch (error) {
        res.status(400).json({msg: error})
    }
}

module.exports = deleteTask