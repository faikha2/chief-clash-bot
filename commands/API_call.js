// Create a way to get API info. We're using the request method
const rp = require('request-promise');
// Get access to the file system
const fs = require('fs');

var url = 'https://api.clashofclans.com/v1/clans/%23L929PGQ2/members';
var token = 'Bearer ' + process.env.TOKEN;

var options = {
    uri: url,
    headers: {
        'authorization' : token
    },
    json: true // Automatically parses the JSON string in the response
};

function call_api() {
    return rp(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            // API call failed...
            console.log("Error in API_call");
            return null;
        });
}

module.exports = client => {

    call_api().then(function(data) {

        console.log(JSON.stringify(data));
    
        // var memList = null;
        // for (var key in data) {
        //     if (key === "memberList") {
        //         memList = data[key];
        //     }
        // }
    
        // var names = [];
        // var txt = "";
        // for (var i = 0; i < memList.length; i++) {
        //     names.push({name: memList[i].name, strikes: false, num_strikes: 0, reasons: [{reason_1: txt, reason_2: txt, reason_3: txt}]});
        // }

        // var data = JSON.stringify(names);

        // fs.writeFile('user_data.json', data, (err) => {
        //     if (err) throw err;
        //     console.log('Data written to file');
        // });
    })

}

// module.exports = {
//     call_api : call_api, 
// };
