module.exports = {
    name: "skip",
    description: "skip a song",
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to stop the music');
        if (!serverQueue) return message.channel.send("There are no songs in the queue to skip");
        serverQueue.connection.dispatcher.end();
    },
};