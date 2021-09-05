import { MessageEmbed } from "discord.js";
import config from './config.js';

const color = '#e6f542';

export const signup = new MessageEmbed()
    .setColor(color)
    .setTitle('Você entrou para o jogo do bicho! 🐎')
    .setDescription(`Você recebeu 40 pila pra começar a apostar!`)
    .addFields(
        { name: "Como apostar:", value: `\`${config.prefix} + nome do animal + numero de apostas\` Cada aposta custa ${config.betAmount} pila` }
    )
    .setFooter(`${config.prefix} help para ver todos os comandos`)

export const animals = new MessageEmbed()
    .setColor(color)
    .setImage('https://i2.wp.com/surgiu.com.br/wp-content/uploads/2020/10/jogo-do-bicho.jpg?fit=600%2C480&ssl=1')

export const setChannel = new MessageEmbed()
    .setColor(color)
    .setTitle("Nenhum canal definido")
    .setDescription(`Você precisa definir um canal para os resultados dos sorteios\n\`${config.prefix} canal <menção do canal>\``)