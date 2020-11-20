const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "devam",
  aliases: ["d"],
  description: "Resume currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ müzik devam ettirildi!`).catch(console.error);
    }

    return message.reply("The queue is not paused.").catch(console.error);
  }
};
