var express = require('express');
var app = express();
var PORT = 3000;

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
}

app.use (middleware.logger);

app.get('/about', middleware.reqireAuthentication, function(req, res) {
	res.send('About Us');
});

app.get('/about', function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});