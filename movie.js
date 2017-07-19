"use strict"

var apiKey = "AIzaSyD4Mwp6aHYVtbsS8RU2E0Y7ngFYVz8c0vM";
var apiId = "002386117610616957570:qh2eln46wiw";
var userInput = "Goon";
var request = require('request');
var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + apiId + "&q=" + userInput;
console.log(apiUrl);

// request(apiUrl, function(error,reponse,body){
// 	console.log('')
// });

module.exports = get(movieTitle);