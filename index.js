/**
 *  This is the main file run by the bot and Heroku server. It connects to the Discord API, keeps track of some IP 
 *  data for debugging purposes and retrieves/runs all of the files in the events folder. 
 * 
 *  Relevant functions:
 *      None created
 * 
 *  File for bot version: 1.0
 */

// Permissions/access to other modules and libraries
const Discord = require("discord.js")
const fs = require('fs');

// Create a client to get info from server
const client = new Discord.Client()

// Automatically binds to a port, either from Heroku or manually on 8080
const port = process.env.PORT || 8080;
console.log("Server listening on port " + port);

// For IP debugging
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('Local IP: '+add);
})

// More IP debugging
var http = require('http');
http.get('http://bot.whatismyipaddress.com', function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('Public IP: ' + chunk);
    });
});

// Open the events folder and retrieve each file
fs.readdir('./events/', (err, files) => {

  files.forEach(file => {

      console.log(file);

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
