var express = require('express');
var connect = require('connect');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/login');

var app = express();

var schema = new mongoose.Schema({
	username : String,
	password : String
});

var user = mongoose.model('user', schema);



app.get('/register', function(req,res){
var user1 = new user({username : req.query.login , password : req.query.pass})

user1.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(user1);
});

res.send("successfully resistered")
	
});


app.get('/login', function(req,res){
var id = req.query.login
var pass = req.query.pass

user.find({} , function(err,data){
			if(err) throw err
			console.log(data[0].password)

		})
	
})

app.listen(3000, function(){
	console.log("server is running")
})