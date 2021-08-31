export default (client, message, args) => {
    message.channel.send("pong!").catch(console.error);

    console.log(message);
    console.log(args);
}