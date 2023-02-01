const taskModel = require("../models/taskModel")

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await taskModel.findOne({ _id: taskID })
        if (!task) return res.status(404).json({msg: `No task existing with id ${req.params.id}`})
        res.status(200).json({task})
    } catch (error) {
        res.status(400).json({msg: error})
    }
}

module.exports = getTask