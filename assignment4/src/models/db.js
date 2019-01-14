'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ojan1998',
    database : 'test_schema'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;