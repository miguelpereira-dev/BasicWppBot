import * as Venom from 'venom-bot';

import commands from './commands.js';

export class CommandExec {
	allCommands: Object;
	prefix: string;

	constructor(client: Venom.Whatsapp) {
		this.allCommands = {};
		this.prefix = '/';

		this.load();
		this.runCommand(client);
	}

	async runCommand(client: Venom.Whatsapp) {
		client.onMessage(async (message) => {
			let args: string[] = [];
			if (message.type === 'chat') {
				args = message.body.split(/\s+/);
				if (args) {
					var name = args.shift();
					if (name) {
						name = name.toLowerCase();
					} else return;
				} else return;

				if (name.startsWith(this.prefix)) {
					const command = this.allCommands[name.replace(this.prefix, '')];
					if (!command) return;

					await command.cb(client, message, args);
				}
			}
		});
	}

	async load() {
		commands.forEach((command) => {
			command.aliases.forEach((alias) => {
				this.allCommands[alias] = command;
			});
			console.log('Registrando comando:', command.name);
		});
	}
}
