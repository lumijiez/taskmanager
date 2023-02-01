const express = require('express')
const router = express.Router()
const createTask = require('../controllers/createTask')
const getTask = require('../controllers/getTask')
const getTasks = require('../controllers/getTasks')
const editTask = require('../controllers/editTask')
const deleteTask = require('../controllers/deleteTask')


router.route('/').get(getTasks).post(createTask)

router.route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .patch(editTask)

module.exports = router

