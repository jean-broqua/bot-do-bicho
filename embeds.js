import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js";
import config from './config.js';

const color = '#e6f542';

const signup = new MessageEmbed()
    .setColor(color)
    .setTitle('Você entrou para o jogo do bicho! 🐎')
    .setDescription(`Você recebeu 40 pila pra começar a apostar!`)
    .addFields(
        { name: "Como apostar:", value: `\`${config.prefix} + nome do animal + numero de apostas\` Cada aposta custa ${config.betAmount} pila` }
    )
    .setFooter(`${config.prefix} help para ver todos os comandos`)

export { signup };