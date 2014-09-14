var url = require('url'),
	http = require('http')
	port = 8084,
	Message = require(__dirname + '/../src/message');

function start() {
	http.createServer(function(request, response) {
		var query = url.parse(request.url, true).query;
		response.writeHead(200);
		var message = new Message(query);
		Message.create(message.formattedForSQlite()).then(function(){
			response.write(JSON.stringify({message: "Your message has been send to a proffesional counsellor."}));
			response.end();
		})
	}).listen(port);
	console.log("Server has started " + port);
}

exports.start = start;