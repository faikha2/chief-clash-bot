const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})
client.login("NzE1Mjg1ODA3NDY3OTg2OTU1.Xs8c2A.3gbOcRSb2ivigi4DBUboUHJVcIM")
