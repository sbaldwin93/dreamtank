var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var category1_itemRoutes = require('./routes/category1_items');
var category2_itemRoutes = require('./routes/category2_items');
var category3_itemRoutes = require('./routes/category3_items');
var category4_itemRoutes = require('./routes/category4_items');
var category5_itemRoutes = require('./routes/category5_items');
var userRoutes = require('./routes/user');

var app = express();
mongoose.connect('localhost:27017/dream-think-tank');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules/bootstrap', express.static(__dirname + "/node_modules/bootstrap"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.use('/category1_item', category1_itemRoutes);
app.use('/category2_item', category2_itemRoutes);
app.use('/category3_item', category3_itemRoutes);
app.use('/category4_item', category4_itemRoutes);
app.use('/category5_item', category5_itemRoutes);
app.use('/user', userRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
