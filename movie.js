'use strict'

var request = require('request');
var movieTitle = require('./app');
var apiId = require('./id');
var apiKey = require('./env');
var get = function(movieTitle){
	var apiUrl = 'https://www.googleapis.com/customsearch/v1?key='+apiKey+'&cx='+apiId+'&q=' + movieTitle;
	request(apiUrl, function(error, response, body){
		var parseThings = JSON.parse(body);
		console.log(parseThings.items[0].snippet);
	});
};

module.exports = get;