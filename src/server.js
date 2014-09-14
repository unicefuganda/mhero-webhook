var url = require('url'),
	http = require('http')
	port = 8084;

function start() {
	http.createServer(function(request, response) {
		var query = url.parse(request.url, true).query;
		response.writeHead(200);
		response.write(JSON.stringify(query));
		response.end();
	}).listen(port);
	console.log("Server has started " + port);
}

exports.start = start;