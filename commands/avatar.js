module.exports = {
    name: 'avatar',
    aliases: ["av","pp"],
    description: 'Avatarınızı gösterir',
    execute(message, args) {
        const Discord = require("discord.js")
        let kullanıcı = message.mentions.users.first() || message.author
        let avatarembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ size:1024, dynamic:true, format: 'png'}))
        .setColor('#00FFFF')
        .setImage(kullanıcı.displayAvatarURL({dynamic: true, size: 1024}))

        message.channel.send(avatarembed)
}};