const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 4300;
  var cors = require('cors');



const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ojan1998',
    database: 'test_schema'
});
 
// connect to database
mc.connect();
app.use(cors());
app.use(express.static('public'));

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/approutes'); //importing route
routes(app); //register the route

app.listen(port);