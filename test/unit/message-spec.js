var Message = require(__dirname + '/../../src/message')
var Config = require(__dirname + '/../../src/config');
var config = new Config();

describe('Message', function() {
	describe('all', function() {
		it('gets all messages from the database', function(done) {
			Message.all().then(function(messages) {
				expect(messages.length).toBe(1)
				firstMessage = messages[0]
				expect(firstMessage.text).toBe('Hello this is a test sms')
				expect(firstMessage.phone).toBe('0788123123')
				expect(firstMessage.rapidProId).toBe(22)
				done();
			}).catch(function(error) {
				expect(error).toBe(null);
				done();
			});
		});

	});
});