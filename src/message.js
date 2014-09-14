var Q = require('q');
var sqlite3 = require('sqlite3').verbose();
var Config = require(__dirname + '/../src/config');
var config = new Config();

var Message = function() {};

Message.all = function() {
	var db = new sqlite3.Database(config.database);
	var deffered = Q.defer();

	db.all('SELECT * FROM messages', function(err, rows) {
		if (!err) {
			deffered.resolve(rows);
		}
	});

	db.close();
	return deffered.promise;
}

Message.create = function(message) {
	var deffered = Q.defer();
	var db = new sqlite3.Database(config.database);

	db.serialize(function() {
		var stmt = db.prepare('INSERT INTO messages (rapidProId, text, phone) VALUES (?, ?, ?)');
		stmt.run(message.rapidProId, message.text, message.phone);
		stmt.finalize(function(){
			deffered.resolve(Message.getByPhone(message.phone))
		});
	});

	db.close();
	return deffered.promise;
}

Message.getByPhone = function(phone) {
	return Message.all().then(function(messages) {
		return messages.filter(function(message) {
			return message.phone == phone;
		})[0]
	});
}

module.exports = Message;