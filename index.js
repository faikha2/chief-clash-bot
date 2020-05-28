// Get access to the Discord library
const Discord = require("discord.js")
// Get access to the file system
const fs = require('fs');

// Create a client to get info from server
const client = new Discord.Client()

const port = process.env.PORT || 8080;
console.log("Server listening on port " + port);

// Open the events folder and retrieve each file
fs.readdir('./events/', (err, files) => {
  files.forEach(file => {

      // console.log(file);

      // Finds our event
      const eventHandler = require(`./events/${file}`)

      // Gets rid of the .js extension
      const eventName = file.split('.')[0]

      // Calls the functions with args
      client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

// Login via Discord token
client.login(process.env.CLIENT_TOKEN)
