// Defines the channel where the draw result will be sent.

import config from '../config.js';

export default (client, message, args) => {
    const channelId = args[0].replace(/\D/g, '');

    message.guild.channels.fetch(channelId)
        .then(() => {
            config.channelId = channelId;
            message.reply('Beleza, todos os resultados dos sorteios serão enviados para este canal. 👍')
            console.log(`Set channel messages to channel id: ${channelId}`);
        })
        .catch(() => {
            message.reply('Não achei esse canal, verifique se você mencionou ele usando "#".')
            console.log(`Failed to set the channel to channel id: ${channelId}`);
        })
}