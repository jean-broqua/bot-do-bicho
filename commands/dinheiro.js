import { user } from '../data/tables.js';

export default async (client, message, args) => {
    const currentUser = user.findByPk(message.author.id)
        .then((user) => {
            if (user === null) {
                message.reply(`Você não está cadastrado no jogo, use \`${config.prefix} entrar\``);
            } else {
                message.reply(`Você tem ${user.wallet} pila`);
            }
        })
}