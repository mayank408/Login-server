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

res.send({success: true, msg: 'Authentication successfully'});
	
});


app.get('/login', function(req,res){
var id = req.query.login
var pass = req.query.pass

user.findOne({
    username: req.query.login
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    }else{
    	var password = user.password
    	if(req.query.pass == password)
    	      res.send({success: true, msg: 'Authentication successfully. User found.'});
    	  else
    	  	      res.send({success: false, msg: 'Wrong password'});

    }
	
})
})

app.listen(3000, function(){
	console.log("server is running")
})