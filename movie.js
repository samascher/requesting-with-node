'use strict'
const request = require('request');
const key = require('./env');

	request(apiUrl, function (error, response, body) {
		let bodyObject = JSON.parse(body);
		console.log(bodyObject);
		bodyObject.items.forEach(function(element) {
			if (element.displayLink === 'www.imdb.com')
				console.log(element.title);
		});	
	});
}

function get(movieTitle) {
	var apiUrl = 'https://www.googleapis.com/customsearch/v1?key=' + key + '&q=';
	var queryArray = movieTitle.split(" ");
	let querryString = "";
	queryArray.forEach(function(element, index) {
		querryString += element;
		if (index < queryArray.length - 1)
			querryString += '+';
	});
}

module.exports = get;