var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	res.render('add', data);

	var newFriend = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/500/500/people'
	}

	console.log(newFriend.name);
	console.log(newFriend.description);
	data["friends"].push(newFriend);
 }