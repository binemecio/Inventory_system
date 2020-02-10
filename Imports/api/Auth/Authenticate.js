import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
const verify = jsonwebtoken.verify
var app = express()

var privateKey = '23423434'

function verifyIfTokenIsCorrect(req, callback)
{
    var token = req.headers['authorization']
    if(!token){
      callback({ status: false , message : "Token is required" })
    }
    token = token.replace('Bearer ', '')

    verify(token, privateKey, function(err, user) {
      if (err) {
        callback({ status: false , message : "Invalid token" })
      }
      else {
        callback({ status: true , message : "" })
      }
    })
}
export default Object.freeze({
  verifyIfTokenIsCorrect, privateKey
})
export { verifyIfTokenIsCorrect, privateKey }

