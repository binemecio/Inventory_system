import express from 'express'
import bodyParser from 'body-parser'
import { getProductList, createProduct } from './Imports/api/controller/product/index.js'
import makeCallback from './Imports/api/express-callback/index.js'
import loginRoute from './Imports/api/auth/login.js'

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.json())

// login folder

app.post('/getProductList',makeCallback(getProductList))
app.post('/addProduct',makeCallback(createProduct))
.use(loginRoute);

app.listen(8080, function(){
    console.log('Started server')
})
