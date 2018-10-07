const express = require('express');
const hbs = require('hbs');



var app =  express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
})
//use middleware
app.use(express.static(__dirname + '/public'))

app.use((req, res, next)=> {
    console.log('MidleWare')
    res.render('maintain')
})
app.get('/', (req, res) => {
    // console.log('Hello Word!');
    res.send({
        name: 'Haudt',
        like: ['read books', 'watch video']
    })

})

app.get('/about', (req, res)=> {
    // res.send('About you know')
res.render('about.hbs', {
    title: 'About page',
    content: 'Welcome to About page',
    currentYear: 2018
});

})

//Connect app with machine

app.listen(3000, ()=> {
    console.log('Server is up on port 3000')
})