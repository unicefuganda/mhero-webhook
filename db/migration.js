var Config = require(__dirname + '/../src/config');
var config = new Config();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.database);

var Migration = {}

Migration.run = function(){
	db.serialize(function() {
	  db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, rapidProId INTEGER, text TEXT, phone VARCHAR(50), createdAt DATE DEFAULT (datetime('now','localtime')))");
	});
	// INSERT INTO messages (id, rapid_pro_id, text, phone, created_at) values (1, 22, "Hello this is a test sms","0788123123", "2013-01-01T05:34:34.034");
	db.close();
}

Migration.drop = function(){
	db.serialize(function() {
	  db.run('DROP TABLE messages');
	});

	db.close();
}

module.exports = Migration;