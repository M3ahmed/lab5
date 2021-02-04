var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	response.render('add', data);

	var newFriend = {
		'name': request.query.name,
		'description': request.query.description,
		'imageURL': 'http://lorempixel.com/500/500/people'
	}

	console.log(newFriend.name);
	console.log(newFriend.description);
	data["friends"].push(newFriend);
 }