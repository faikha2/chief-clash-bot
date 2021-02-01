/**
 * This file is run when the bot is starting up and can contain code that needs to run over and over again. As of right now, 
 * it gives a simple login message to confirm that the bot has logged in. It then continously updates our data files by 
 * calling the Clash of Clans API 
 * 
 * File for bot version: 1.0
 */

// Permissions/access to other modules and libraries
var schedule = require('node-schedule');
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');
var api = require('../commands/API_call');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
require('log-timestamp');

/* 
  Code that is exported from the file and can be run anywhere. This code/function speficially
  outputs our login message and then uses a scheduler to update our API every hour.
*/
module.exports = client => {

    // Login message to confirm bot is working
    console.log(`Logged in as ${client.user.tag}!`)

    // This schedule module allows code inside to be run over and over 
    var j = schedule.scheduleJob('1 */1 * * *', function(){
        
        // Our target Discord channel. Note: Actual channel ID leads nowhere :)
        const channel = client.channels.cache.get('695062761339879457');
        
        // Sends an API request to gain full data
        api.call_api()
        console.log("Updating API")
        channel.send("Wait...")

        // Then calls a function to convert full data to relevant data
        api.update_data()
        channel.send('Wait a little bit more...')

        // Displays names for debugging purposes
        display.display_names(client)
    });
}
