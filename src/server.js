var http = require("http"),
    port = 8084;

function start() {
    function onRequest(request, response) {
        var responseBody = JSON.stringify({
            "urns": ["tel:+250788123123", "tel:+250788123124"],
            "text": "hello world"
        });
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });

        response.write(responseBody);

        response.end();
    }

    http.createServer(onRequest).listen(port);
    console.log("Server has started " + port);
}

exports.start = start;
