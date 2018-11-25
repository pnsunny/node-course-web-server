const express = require('express');
const mongoose = require('./database/mongoose-connect')
const { Todo } = require('./models/todos.js');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())

app.post('/todo', (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        status: req.body.status
    })
    todo.save().then(doc => {
        res.status(200).send(todo)
    }, err => {
        res.status(400).send(err)
    })

})


const port = process.env.PORT || 3000;

//Connect app with machine

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

module.exports  =  { app };