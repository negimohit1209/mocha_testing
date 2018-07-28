const express = require('express');
var app = express();

app.get('/', (req, res) => {
    // res.status(404).send('Hello');
    res.status(404).send({
        error: "Page not found",
        name: 'my app'
    })
})

//GET /users
app.get('/users', (req, res) => {
    res.send([{
        name: 'Mohit',
        age: 21
    },{
        name: 'Rosey',
        age: 19
    },{
        name: 'Raj',
        age: 25
    }])
})

app.listen(3000, ()=>console.log("server started"));

module.exports.app = app;