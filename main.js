var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var db = 'mongodb://localhost/CRUDSIMPLE';
var Fan = require('./models/Fan.model');
mongoose.connect(db);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get all the fans
app.get('/fans',function(req, res){
	Fan.find({})
	.exec(function(err,doc){
		if(err){
			res.send('an error occured ');
			return;
		}else{
			res.send(doc);
		}
	})
});

// get one fan's details
app.get('/fan/:id',function(req, res){
	Fan.findOne({_id: req.params.id})
	.exec(function(err, doc){
		if(err){
			res.send('an error occured ');
			return;
		}else{
			res.send(doc);
		}
	});
});
// add a new fan
app.post('/fans',function(req, res){
	if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phone || !req.body.monthlySupport || !req.body.aboutMe){
		res.send('please fill in all the required fields');
		return;
	}
	var newFan = new Fan();
	newFan.firstName = req.body.firstName;
	newFan.lastName = req.body.lastName;
	newFan.email = req.body.email;
	newFan.phone = req.body.phone;
	newFan.monthlySupport = req.body.monthlySupport;
	newFan.aboutMe = req.body.aboutMe;
	newFan.save(function(err, doc){
		if(err){
			res.send('an error occured adding a new fan');
		}else{
			res.send(doc);
		}
	});
});
// Delite Fan
app.delete('/fan/:id',function(req, res){
	Fan.findOneAndRemove({_id: req.params.id})
	.exec(function(err, doc){
		if(err){
			res.send('sorry an error occured deleting the fan');
		}else{
			res.send(doc);
		}
	});
});

// update fan's details

app.put('/fan/:id',function(req, res){
	if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phone || !req.body.monthlySupport || !req.body.aboutMe){
		res.send('please fill in all the required fields');
		return;
	}
	Fan.findOneAndUpdate({_id:req.params.id},
		{
			$set:
				{
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					phone: req.body.phone,
					monthlySupport: req.body.monthlySupport,
					aboutMe: req.body.aboutMe
				}
		},
		{
			upset: true
		},function(err, doc){
			if(err){
				res.send('an error occured');
			}else{
				res.json(doc);
			}
		});
});





app.get('/books',function(req, res){
	Book.find({})
	.then(function(doc){
		if(doc.length < 1){
			res.send('nothing is in the database');
			return;
		}
		res.send(doc);
		return;
	} , function(err){
		res.send('an error occured');
	})
});















app.listen(53053,function(){
	console.log('the server started on port 53053');
});