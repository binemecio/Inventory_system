var mysql = require('mysql')
var express = require('express')
var app = express()
// initialize body parse
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.json())

var con = null

function connectToDataBase(conexionCallback)
{
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'inventory',
        port: 3306
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        conexionCallback(con)
    });
}

exports.connectToDataBase = connectToDataBase