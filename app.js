
/**
 * Module dependencies.
 */

var compression = require('compression');
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


//variables for controller
var index = require('./routes/index');
var resume = require('./routes/resume');
var app = express();

//compress responses
app.use(compression());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon("public/images/favicon2.png"));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/resume', resume.view);
app.get('/oops', index.view1);
app.get('/oopsmobile', index.view2);
app.get('/test', index.view3);
app.get('/sitemap', index.view4);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
