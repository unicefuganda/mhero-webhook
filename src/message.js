var Q = require('q');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('messagedb_staging.sqlite3');

var Message = function(){
};

Message.all = function(){
	var deffered = Q.defer();

	db.all('SELECT * FROM messages', function(err, rows) {
		if (!err){
			deffered.resolve(rows);
		}
  });

	db.close();
  return deffered.promise;
}

module.exports = Message;