import DiscordJS, { Intents } from 'discord.js';
import fs from 'fs';
import dotenv from 'dotenv';
import config from './config.js';

dotenv.config();

const clientOptions = { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] };
const client = new DiscordJS.Client(clientOptions);

client.config = config;

client.on('ready', () => {
    console.log('Bot is alive');
})

client.commands = new DiscordJS.Collection();

// Import from commands/ into commands Collection;
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(async file => {
        if (!file.endsWith(".js")) return;
        let props = await import(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command from the commands Collection.
    const cmd = client.commands.get(command);

    // Run the command
    cmd.default(client, message, args);
})

client.login(config.token);