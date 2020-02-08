var express = require('express')
var jwt = require('jsonwebtoken')
var route = express.Router()
var authenticate = require('./Authenticate')
// initialize body parse
var bodyParser = require('body-parser')
route.use(bodyParser.urlencoded({ extended: false }))
route.use(bodyParser.json())
route.use(bodyParser.json({limit:'10mb'}))
route.post('/auth', function(req, res){
        var user = req.body.username
        var password = req.body.password

        if(!(user == 'binemecio' && password == '1234')){
                res.status(401).send({
                        error: 'Incorrect User or Password'
                })
                return
        }

        tokenData = {
                username : user
        }

        var token = jwt.sign(tokenData, authenticate.privateKey, { expiresIn: '2h'  })
        res.send( { token } )
})

module.exports = route