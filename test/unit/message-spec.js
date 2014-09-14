var Message = require(__dirname + '/../../src/message')

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

	describe('getByPhonee', function() {
		it('gets a contact by phone number', function(done) {
			Message.getByPhone('0788123123').then(function(message) {
				console.log(message);
				expect(message.text).toBe('Hello this is a test sms')
				expect(message.phone).toBe('0788123123');
				expect(message.rapidProId).toBe(22)
				done();
			});

		});
	});
});