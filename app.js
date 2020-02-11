import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const session = require('express-session');
const passport = require('passport');

const app = express();

// Middleware
app.use(cors({
  origin:['http://localhost:8080'],
   methods:['GET','POST','PUT','DELETE'],
   credentials: true // enable set cookie
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});