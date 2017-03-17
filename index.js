/**
 * Created by billtt on 03/17/2017.
 */

const request = require('request');

function sendMessage(serverUrl, token, message, callback) {
	const options = {
		uri: serverUrl + '/hooks/' + token,
		method: 'POST',
		json: {
			text: message
		}
	};
	request(options, function(error, response) {
		if (callback) {
			if (response.statusCode !== 200) {
				error = new Error('Server responded with code ' + response.statusCode);
				callback(error);
			}
			callback(error);
		}
	});
}

exports.sendMessage = sendMessage;
