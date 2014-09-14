var Message = require(__dirname + '/../../src/message')

describe('Message', function() {
	describe('construct', function() {
			var messageRequest = {
				"mo_sms": "",
				"id": "23554",
				"relayer": "254",
				"relayer_phone": "+250788111111",
				"phone": "+250788123123",
				"text": "Im gonna pop some tags",
				"time": "2013-01-01T05:34:34.034"
			}

			var message = new Message(messageRequest);

		it('creates constructs a Message object from request hash', function() {
			expect(message.text).toBe("Im gonna pop some tags");
			expect(message.phone).toBe('+250788123123');
			expect(message.relayer_phone).toBe('+250788111111');
			expect(message.time).toBe("2013-01-01T05:34:34.034");
			expect(message.rapidProId).toBe("23554");
		});

		it('formats for database', function() {
			var message = {
				rapidProId: '23554',
				text: "Im gonna pop some tags",
				phone: "+250788123123",
			}

			var messageInDbFormat = new Message(messageRequest).formattedForSQlite();
			expect(messageInDbFormat).toEqual(message);
		});
	});

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
				expect(message.text).toBe('Hello this is a test sms')
				expect(message.phone).toBe('0788123123');
				expect(message.rapidProId).toBe(22)
				done();
			});

		});
	});
	describe('create', function() {
		it('creates a new message in the database', function(done) {
			var message = {
				rapidProId: 4030,
				text: 'Hello this is a test sms',
				phone: '0779432918'
			}

			Message.create(message).then(function(message) {
				expect(message.text).toBe('Hello this is a test sms')
				expect(message.phone).toBe('0779432918');
				expect(message.rapidProId).toBe(4030)
				done();
			});
		});
	});
});