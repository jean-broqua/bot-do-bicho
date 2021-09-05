import { setChannel } from "../embeds.js"
import config from '../config.js'
import { user, aposta } from '../data/tables.js'
import { currentDrawNum } from "../events/draw.js";

export default async (client, message, args) => {
    if (config.channelId > 0) {

        const animal = args[0];
        const numOfBets = parseInt(args[1]);
        const userId = message.author.id;
        console.log(args);
        console.log(numOfBets);

        const currentUser = await user.findByPk(userId);

        // Check if user is on database
        if (currentUser === null) {
            message.reply(`Você não está cadastrado no jogo, use \`${config.prefix} entrar\` para poder apostar`);
            return;
        } else {
            const userMoney = currentUser.wallet;
            console.log(userMoney);

            // Validate the bet amount
            if (Number.isNaN(numOfBets)) {
                message.reply(`"${args[1]}" é inválido, digite somente números.`)
                return;
            } else {
                const cost = config.betAmount * numOfBets;
                if (cost > userMoney) {
                    message.reply(`Você não tem dinhero para fazer esta aposta. Cada aposta custa ${config.betAmount} pila.`);
                } else {
                    await currentUser.update({ wallet: userMoney - cost });
                    createBet(args[0], cost, userId);
                    // Send embed comunicating bet.
                    message.reply('aposta feita meu bruxo');
                }
            }
        }
    } else {
        message.channel.send({ embeds: [setChannel] });
    }
}

// Insert the bet on the databse
async function createBet(animal, betAmount, userId) {
    const newBet = await aposta.create({
        user: userId,
        amount: betAmount,
        animal: animal
    })
    console.log(newBet);
}