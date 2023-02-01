const taskModel = require("../models/taskModel")

const editTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params
        const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({ task })
    } catch (error) {
        res.status(400).json({msg: error})
    }
}

module.exports = editTask