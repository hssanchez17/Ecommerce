	import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'


const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(cors({
  origin:['http://localhost:8080'],
   methods:['GET','POST','PUT','DELETE'],
   credentials: true // enable set cookie
}))



// Middleware
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(publicPath)));
app.use(cookieSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.use('/',require('./routes/index'))

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});