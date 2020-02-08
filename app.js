var express = require('express')
var app = express()

// login folder
const login = require('./Imports/api/Auth/Login')
var authenticate = require('./Imports/api/Auth/Authenticate')

// database folder
var database = require('./Imports/api/DataAccess/database')

// product folder
const product = require('./Imports/api/Controller/Product/product')

app.get('/', (req, res) => {
    res.write('Welcome');
    res.end()
})
.use(product)
.use(login);

app.listen(8080, function(){
    console.log('Started server')
})
