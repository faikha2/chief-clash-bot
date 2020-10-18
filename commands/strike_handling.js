/**
 *  Contains all the functions related to handling strike information. The strike system is intiated via input from
 *  the Discord client (done in messages.js) and then acted upon by modifying the user_strikes_data.json file we have
 *  stored. 
 * 
 *  Relevant functions:
 *      @add_strike()
 *      @remove_strike()
 *      @list_strikes()
 *  
 *  File for bot verion: 1.0
 */

// Permissions/access to other modules and libraries
const fs = require('fs');

/*
  Gets access to our JSON strike data and adds a strike to a user when specified

  Parameters: 
       @client: The Discord user giving the bot command
  
  Relevant files: user_strikes_data.json
*/
function add_strike(client, reason) {

    // Makes an easy to parse JSON object using our strike file
    var strike_data = require('../user_strikes_data.json');

    // Get a list of the names
    var usernames = []
    for (key in strike_data) {
      usernames.push(strike_data[key].name);
    }
  
    console.log(usernames);
    console.log(client.user.tag);
}

/*
  Gets access to our JSON strike data and removes a strike to a specified user. The file is then updated and saved
  back into the same file.

  Parameters: 
       @client: The Discord user giving the bot command
  
  Relevant files: user_strikes_data.json
*/
function remove_strike(client, reason) {

  // Makes an easy to parse JSON object using our strike file
  var strike_data = require('../user_strikes_data.json');
    
}

/*
  The functions that are exported from this module (meaning they can be used in other files as well)
*/
module.exports = {
    add_strike : add_strike,
    remove_strike : remove_strike,
};