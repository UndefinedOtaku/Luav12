const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "geç",
  aliases: ["g"],
  description: "Skip the currently playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Geçebilmem için bir şey çalmıyor ab.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ müzik geçildi.`).catch(console.error);
  }
};
