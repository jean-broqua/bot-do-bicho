import { animals } from "../embeds.js"

export default (client, message, args) => {
    message.channel.send({ embeds: [animals] });
}