import Express from 'express'
import jsw from 'jsonwebtoken'
const sign = jsw.sign
var loginRoute = Express.Router()
import privateKey from './authenticate.js'
// initialize body parse
import bodyparser from 'body-parser'
const urlencoded = bodyparser.urlencoded
const json = bodyparser.json
loginRoute.use(urlencoded({ extended: false }))
loginRoute.use(json())
loginRoute.use(json({limit:'10mb'}))
loginRoute.post('/auth', function(req, res){
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

        var token = sign(tokenData, privateKey, { expiresIn: '2h'  })
        res.send( { token } )
})
export default loginRoute
