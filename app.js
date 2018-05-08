//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27107/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
	console.log('Connected to database mongodb @ 27107');
});

mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('Error in database connection '+err);
	}
	
});

//port number
const port = 3000;

//adding middleware
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

//testing server
app.get('/',(req, res)=>{
	res.send('ankur');
});

app.listen(port,()=>{
	console.log('Server started at port : '+port);
});