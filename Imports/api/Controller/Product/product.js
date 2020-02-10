var express = require('./node_modules/express')
var app = express()
var route = express.Router()

var authenticate = require('../../auth/authenticate')
var databaseHelper = require('../../DataAccess/database')
// initialize body parse
var bodyParser = require('./node_modules/body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.json())

route.post('/productList', function(req, res){
    authenticate.verifyIfTokenIsCorrect(req, function(validate){
        if(validate.status == false)
        {
            res.send(validate.message)
            return
        }
        retrieveProductsList(req, res)
    })

})

function retrieveProductsList(req, res)
{
    databaseHelper.connectToDataBase(function(con){
        con.query('SELECT * FROM product', function (err, result) {
            if (err) throw err;
            res.send(JSON.stringify(result))        
        });
    })
}

module.exports = route
