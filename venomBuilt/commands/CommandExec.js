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
exports.CommandExec = void 0;
const commands_js_1 = require("./commands.js");
class CommandExec {
    constructor(client) {
        this.allCommands = {};
        this.prefix = '/';
        this.load();
        this.runCommand(client);
    }
    runCommand(client) {
        return __awaiter(this, void 0, void 0, function* () {
            client.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
                let args = [];
                if (message.type === 'chat') {
                    args = message.body.split(/\s+/);
                    if (args) {
                        var name = args.shift();
                        if (name) {
                            name = name.toLowerCase();
                        }
                        else
                            return;
                    }
                    else
                        return;
                    if (name.startsWith(this.prefix)) {
                        const command = this.allCommands[name.replace(this.prefix, '')];
                        if (!command)
                            return;
                        yield command.cb(client, message, args);
                    }
                }
            }));
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            commands_js_1.default.forEach((command) => {
                command.aliases.forEach((alias) => {
                    this.allCommands[alias] = command;
                });
                console.log('Registrando comando:', command.name);
            });
        });
    }
}
exports.CommandExec = CommandExec;
