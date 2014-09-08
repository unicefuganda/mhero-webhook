var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end(JSON.stringify(req.body));
}).listen(8080);

console.log("Listening on port 8080");