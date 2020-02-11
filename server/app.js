import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const passport = require('passport');
const app = express();
const bodyParser = require('body-parser');

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

app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

// Rutas
app.get('/', (req, res) => {
	console.log(req.body)
  	res.status(200).json({message: "Hello world"});
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json({message: "todo fino"});
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});