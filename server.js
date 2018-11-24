const express = require('express');
const hbs = require('hbs');



var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {
    // console.log('Hello Word!');
    res.status(200).send({
        name: 'haudt',
        hobies: ['watching video', 'reading book']
    })
})

const mongoDB = require('./database/mongodb-connect')


//use middleware
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    console.log('MidleWares')
    res.render('maintain')
 next();
})

app.get('/about', (req, res) => {
    // res.send('About you know')
    res.render('about.hbs', {
        title: 'About page',
        content: 'Welcome to About page',
        currentYear: 2018
    });

})
const port = process.env.PORT || 3000;

//Connect app with machine

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

module.exports.app = app;