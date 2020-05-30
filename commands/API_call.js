/**
 *  Contains the code for the main API call to the Clash of Clan (mobile game) server. Sends a GET request through
 *  a Fixe proxy server (to allow for a static IP and then) and gets data for members of a specific in-game clan. The 
 *  incoming data is stored as a JSON file for easy access and updating.
 * 
 *  Once the file is created, another JSON file is created to hold all the 'strike' information for each member of the clan. 
 *  Will most likely be run daily.
 * 
 *  Relevant functions: 
 *    @call_api()
 *    @create_strike_data()
 *    @update_data()
 * 
 *  File for bot verion: 1.0
 */

// Permissions/access to other modules and libraries
const rp = require('request-promise');
const fs = require('fs');

// Sets up proxy server
const fixieRequest = rp.defaults({'proxy': process.env.FIXIE_URL});

// URL and my token of the target site
var url = 'https://api.clashofclans.com/v1/clans/%23L929PGQ2/members';
var token = 'Bearer ' + process.env.TOKEN;

// Additional info to add the URL for the GET request
var options = {
    uri: url,
    headers: {
        'authorization' : token
    },
    json: true // Automatically parses the JSON string in the response
};

/*
  Uses NodeJs request-promise to make a GET request to the Clash of Clans server. It recieves the data as a JSON string and 
  saves it into a file.

  Parameters: None
  Relevant files: user_data.json
*/
function call_api () {
    // Uses our proxy
    fixieRequest(options)
        .then(function (response) {
            
            // If the response comes without an error, it writes it to a file as a JSON string
            fs.writeFile('user_data.json', JSON.stringify(response), (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });
            return response;
        })
        .catch(function (err) {
            // API call failed
            console.log("Error in API_call");
            return null;
        });
} 

/*
  Takes our previously created user_data (from the API call) and extracts the usernames (clan member names). The list of usernames 
  is then used to create a new file to handle all of the bot's strike information.

  Parameters: None
  Relevant files: user_strikes_data
*/
function create_strike_data() {

    // Easy way to both open and parse a JSON file
    var user_data = require('../user_data.json');

    // Extracts the clanmate's usernames from the JSON file
    var usernames = []
    for (key in user_data.items) {
        usernames.push(user_data.items[key].name);
    }

    // Creates the nested array that will eventually be turned into a JSON file
    var txt = "";
    var json_strike_data = [];
    for (var i = 0; i < usernames.length; i++) {

        // The format that our data is pushed into the array
        json_strike_data.push(
            {
                name: usernames[i], 
                strikes: false, 
                num_strikes: 0,
                reasons: 
                [
                    { reason_1: txt, 
                      reason_2: txt, 
                      reason_3: txt
                    }
                ]
            });
    }

    // Takes that strike data array we just made and finally turns it into a JSON opject
    var data = JSON.stringify(json_strike_data);

    // Writes that JSON object into a new file
    fs.writeFile('user_strikes_data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

/*
  The point of this function is to go through the user data file (from API call) and the user strike data (made by extracting 
  usernames) and compare to see if new members were added or if old members need to be removed.

  Parameters: None
  Relevent files: user_data.json, user_strikes_data,json
*/
function update_data() {

    // Easy way to both open and parse a JSON file
    var user_data = require('../user_data.json');
    
    // Extracts the clanmate's usernames from the JSON file
    var usernames = []
    for (key in user_data.items) {
        usernames.push(user_data.items[key].name);
    }

    console.log(usernames);
} 

/*
  The functions that are exported from this module (meaning they can be used in other files as well)
*/
module.exports = {
    call_api : call_api, 
    create_strike_data : create_strike_data,
    update_data : update_data,
};
