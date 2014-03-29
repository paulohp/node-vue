// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public'));   // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                           // log every request to the console
app.use(bodyParser());                            // pull information from html in POST
app.use(methodOverride());                        // simulate DELETE and PUT


//Routes
app.route('/dogs')
  .get(function(req, res, next){
    res.json({ name: 'tobi' });
    next();
  })
  .post(function(req, res, next){

  });

app.listen(3000);
console.log('Magic happens on port ' + 3000);     // shoutout to the user
