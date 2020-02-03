var express = require('express')
var jwt = require('jsonwebtoken')
var app = express()

var privateKey = '23423434'

function verifyIfTokenIsCorrect(req, callback)
{
    var token = req.headers['authorization']
    if(!token){
      callback({ status: false , message : "Token is required" })
    }
    token = token.replace('Bearer ', '')

    jwt.verify(token, privateKey, function(err, user) {
      if (err) {
        callback({ status: false , message : "Invalid token" })
      }
      else {
        callback({ status: true , message : "" })
      }
    })
}

exports.privateKey = privateKey
exports.verifyIfTokenIsCorrect = verifyIfTokenIsCorrect
