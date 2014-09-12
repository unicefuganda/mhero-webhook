var Config = require(__dirname + '/../src/config');
var config = new Config();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.database);

var Seed = {}

Seed.run = function() {
	db.serialize(function() {
		var stmt = db.prepare("INSERT INTO messages VALUES (1, 22, 'Hello this is a test sms','0788123123', '2013-01-01T05:34:34.034')");
		stmt.run();
		stmt.finalize();
	});
}

module.exports = Seed;