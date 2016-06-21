
var express = require('express');

	var middleware = {
		reqireAuthentication: function (req, res, next) {
			console.log('private route hit!');
			next();
		},
		logger: function (req, res, next) {
			var date = new Date().toString();
			console.log('Request: ' + date + ' ' + req.method + req.originalUrl);
			next();
		}
	};

module.exports = middleware;
