const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
        trime: true
    },
    status: {
        type: String
    },
    percent: {
        type: Number
    }
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = { Todo }