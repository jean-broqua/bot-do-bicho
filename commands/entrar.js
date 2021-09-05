// Command to include user on database in order to be able to play.

import { user } from '../data/tables.js'
import config from '../config.js'
import { signup } from '../embeds.js'

export default async (client, message, args) => {
    // Add user to the user table if it not exists
    const [newUser, created] = await user.findOrCreate({
        where: { id: message.author.id },
        defaults: {
            wallet: config.startCoins
        }
    })

    if (created) {
        // Send embed saying user was created
        message.reply({ embeds: [signup] });

    } else {
        // Send message saying usar was not created
    }
}
