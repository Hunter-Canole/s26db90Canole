require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CON;

// 2. Database Connection
mongoose.connect(connectionString);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded");
});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
function(username, password, done) {
Account.findOne({ username: username })
.then(function (user){
if (err) { return done(err); }
if (!user) {
return done(null, false, { message: 'Incorrect username.' });
}
if (!user.validPassword(password)) {
return done(null, false, { message: 'Incorrect password.' });
}
return done(null, user);
})
.catch(function(err){
return done(err)
})
})
)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jewelryRouter = require('./routes/jewelry');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var Jewelry = require("./models/jewelry");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
secret: 'keyboard cat',
resave: false,
saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

async function recreateDB(){
// Delete everything
await Jewelry.deleteMany();
let instance1 = new
Jewelry({name:"Earring", cost:5000,
description:"42 carats"});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
Jewelry({name:"Ring", cost:10000,
description:"24 carats"});
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});
let instance3 = new
Jewelry({name:"Necklace", cost:2000,
description:"12 carats"});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jewelry', jewelryRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
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
module.exports = app
