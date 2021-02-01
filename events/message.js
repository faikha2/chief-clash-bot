/**
 *  This file is executed whenever someone sends a message in our Discord server. As of right now,
 *  various different commands are supported. Main functionality of app currently includes some 
 *  strike handling commands and some commands to help with D&D nights.  
 * 
 *  Functions:
 *      @getRandomIntInclusive()
 *      @exported() 
 *  
 *  File for bot verion: 1.0
 */

// Gets access to all of the relevant modules and libraries
var api = require('../commands/API_call');
var strike = require('../commands/strike_handling');
var display = require('../commands/display');
const { MessageFlags } = require('discord.js');
require('log-timestamp');

/* 
  Just a simple function to return a random number between to values

  Parameters: 
      @min: An integer representing lower bound of random value
      @max: An integer representing upper bound of random value
*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

/* 
  Code that is exported from the file and can be run anywhere. This code/function speficially
  handles all message input.

  Parameters:
      @client: Our discord server
      @msg: The message that was just recieved by our client
*/
module.exports = (client, msg) => {

    // --------- TESTING BELOW ---------

    // @test - Command for testing whether our strike data file is created or not
    if (msg.content === "!create-strike-data") {
        api.create_strike_data()
        msg.reply("Created data")
    }

    // @test - Command for testing whether our data file updates or not
    if (msg.content === "!update-data") {
        api.update_data()
        msg.reply("Updated data")
    }
 
    // @test - Command for manually testing our API call to Clash of Clans 
    if (msg.content === "!call-api") {
       api.call_api();
       msg.reply("Called the api - hopefully it worked");
    }

    // @test - Command for manually testing our data creation
    if (msg.content === "!create-data") {
        api.create_strike_data();
        msg.reply("Created the data file - hopefully it worked");
    }

    // @test - Command for testing welcome message 
    if (msg.content === "!welcome-message") {
        display.display_welcome(client);
    }

    // --------- STRIKE HANDLING BELOW ---------

    // Explains how to use the bot!
    if (msg.content === "!help") {
        msg.reply("Use !display_names to display all the names and IDs. Then use !add-strike #### REASON to give someone a strike. If you want to see all the strikes, use !display-strikes.")
    }

    // This is the command used to add strikes!
    if (msg.content.startsWith("!add-strike")) {

       // Basic string manipulation 
        var command = msg.content;
        var id = msg.content.substr(12, 4);
        var reason = msg.content.substr(17);

        // Log for testing and then call our strike module function
        console.log(reason);
        strike.add_strike(client, id,  reason);
    }

    // Displays strikes by calling our deisplay modue function
    if (msg.content === "!display-strikes") {
        display.display_strikes(client)
    }

    // Displays names by calling our deisplay modue function
    if (msg.content === "!display-names") {
        display.display_names(client);
    }

    // --------- DICE COMMANDS FOR D&D BELOW --------- 

    if (msg.content === "!roll-help") {
        msg.reply("Use the command !roll-D# with the # being 4, 6, 8, 10, 12, or 20");
    }
    if (msg.content === "!roll-D4") {
        var num = getRandomIntInclusive(0, 4);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D6") {
        var num = getRandomIntInclusive(0, 6);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D8") {
        var num = getRandomIntInclusive(0, 8);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D10") {
        var num = getRandomIntInclusive(0, 10);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D12") {
        var num = getRandomIntInclusive(0, 12);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D20") {
        var num = getRandomIntInclusive(0, 20);
        msg.reply("You rolled a " + num + "!");
    }

}