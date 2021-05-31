import * as Venom from 'venom-bot/dist/';

import { CommandExec } from './commands/CommandExec.js';

Venom.create('Main')
	.then((client) => start(client))
	.catch((erro) => {
		console.log(erro);
	});

async function start(client: Venom.Whatsapp) {
	const commander = new CommandExec(client);
}
