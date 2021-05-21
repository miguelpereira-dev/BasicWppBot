import venom from 'venom-bot';

venom
	.create('Main')
	.then((client) => start(client))
	.catch((erro) => {
		console.log(erro);
	});

async function start(client) {
	client.onMessage(async (message) => {
		if (message.chat.id == '553391800907-1608154668@g.us') {
			console.log();
		}

		if (message.body === 'Oi bot' && message.isGroupMsg === false) {
			client
				.sendText(message.from, 'Botzada online')
				.then((result) => {
					console.log('Result: ', result); //return object success
				})
				.catch((error) => {
					console.error('Error when sending: ', error); //return object error
				});
		}
	});
}
