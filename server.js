var express = require ('express');
var app = express();
var BodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var mongodb = require('mongodb');
var createError = require('http-errors');
var logger = require('morgan');



//Connection 
mongoose.connect('mongodb://localhost/Project415v10D');
var db = mongodb.connection;


app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
//Api Route

app.use('/',require('./rest/emr'))



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app.get('/',function(req,res){
	//res.send('Hello');
//});
//Start Server
app.listen(3000);
console.log('Running on port 3000...')

/*var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://localhost/resources");

var Resource = app.resource = restful.model('resource', mongoose.Schema({
    title: String,
    year: Number,
  }))
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');

app.listen(3000);
*/