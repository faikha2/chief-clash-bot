// Create a way to get API info. We're using the request method
const rp = require('request-promise');
// Get access to the file system
const fs = require('fs');

// Let's the request-promise module know we are routhing traffic through a proxy server
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

// Actual API call done here through a request promise
function call_api () {
    // Uses our proxy
    fixieRequest(options)
        .then(function (response) {
            
            // If the response comes without an error, it writes it to a file as a JSON string
            fs.writeFile('user_data.json', JSON.stringify(response), (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });

            // Return the response
            return response;
        })
        .catch(function (err) {
            // API call failed...
            console.log("Error in API_call");

            // Return's nothing if there's an error
            return null;
        });
} // End call_api

// Parses through JSON file to get names and create our json data
function create_strike_data() {

    // Opens up the json file and reads data into an object variable
    var obj;
    fs.readFile('user_data.json', 'utf8', function (err, data) {

        // Basic error handling
        if (err) throw err;

        // Converts the file into a JSON object
        obj = JSON.parse(data);

        // Place holder for names from JSON object
        var usernames = [];
        // Loops through the JSON object and accesses clan member's names and pushes it into an array
        for (key in obj.items) {
            // console.log(obj.items[key].name)
            usernames.push(obj.items[key].name);
        }

        // Takes the array of names and makes a new array of strike data
        var txt = "";
        var json_strike_data = [];
        for (var i = 0; i < usernames.length; i++) {
            json_strike_data.push({name: usernames[i], strikes: false, num_strikes: 0, reasons: [{reason_1: txt, reason_2: txt, reason_3: txt}]});
        }

        // Takes that strike data array and turns it into a JSON version
        var data = JSON.stringify(json_strike_data);

        // Writes that into a new file
        fs.writeFile('user_strikes_data.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    });
} // End create_strike_data

function update_data() {

    // Place holder for names from JSON object
    var usernames = [];

    // Opens up the json file and reads data into an object variable
    var obj;
    fs.readFileSync('user_data.json', 'utf8', function (err, data) {

        // Basic error handling
        if (err) throw err;

        // Converts the file into a JSON object
        obj = JSON.parse(data);

        // Loops through the JSON object and accesses clan member's names and pushes it into an array
        for (key in obj.items) {
            // console.log(obj.items[key].name)
            usernames.push(obj.items[key].name);
        }

        console.log('In: ' + usernames);

    });

    console.log('OUT: ' + usernames);

} // End update_data

module.exports = {
    call_api : call_api, 
    create_strike_data : create_strike_data,
    update_data : update_data,
};
