module.exports = {
    name: "ping",
    description: 'ping the bot to test if its online and responding!',
    execute(message) {
        message.channel.send('Pong!');
    },
};