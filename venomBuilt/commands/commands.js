"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        name: 'Ajuda',
        aliases: ['help', 'h', 'menu', 'ajuda'],
        cb: ({ client, message, args }) => __awaiter(void 0, void 0, void 0, function* () {
            yield client.sendText(message.from, 'Me chamaram?');
        }),
    },
    {
        name: 'Status',
        aliases: ['status'],
        cb: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield client.sendText(message.from, 'Status: Funcionando!');
        }),
    },
    {
        name: 'Spam',
        aliases: ['spam'],
        cb: (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < Number(args[0]); i++) {
                yield client.sendText(message.from, `Spam: já são ${i + 1} mensagens`);
            }
        }),
    },
];
