/**
 *  This file is executed whenever someone joins our Discord server. As of right now, 
 *  it only displays a welcome message. 
 *  
 *  File for bot verion: 1.0
 */

// Get access to the display module
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');

/* 
  Code that is exported from the file and can be run anywhere. 
*/
module.exports = (client, member) => {
    // Calls function found in our display file
    display.display_welcome(client);
}