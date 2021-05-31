import * as Venom from 'venom-bot';

export default [
	{
		name: 'Ajuda',
		aliases: ['help', 'h', 'menu', 'ajuda'],
		cb: async ({ client, message, args }: command) => {
			await client.sendText(message.from, 'Me chamaram?');
		},
	},
	{
		name: 'Status',
		aliases: ['status'],
		cb: async (client: Venom.Whatsapp, message: Venom.Message, args) => {
			await client.sendText(message.from, 'Status: Funcionando!');
		},
	},
	{
		name: 'Spam',
		aliases: ['spam'],
		cb: async (client: Venom.Whatsapp, message: Venom.Message, args) => {
			for (let i = 0; i < Number(args[0]); i++) {
				await client.sendText(message.from, `Spam: já são ${i + 1} mensagens`);
			}
		},
	},
];

type command = {
	client: Venom.Whatsapp;
	message: Venom.Message;
	args: String[];
};
