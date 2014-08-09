/*
var mongoose = require('mongoose');
var mongo_config = require('./config').mongo_config;
var _ = require("underscore");

mongoose.connect(mongo_config.dbURL);
SuperHero = mongoose.model('SuperHero', { name: "string" });
hero = new SuperHero({
    name: "Superman"
});

hero.save(function(err) {
    if (err) {
      return console.log("kryptonite");
    } else {
      console.log("Up, up, and away!");
    }
});

SuperHero.find({}, function(err, documents) {
    return console.log(documents[0]);
});
return;
*/

var request = require('request');

var options = {};
/*
options.url = 'http://localhost:3000/add_user';
options.method = 'POST';
options.json = {
  'username': 'rahul',
  'password': 'fire',
  'contact': '6503530259',
  'engine': 'A',
  'role': 'Commander'
};
*/
options.method = 'GET';
options.url = 'http://107.170.238.227:3000/all_events';

request(options, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body));
    //console.log(body);
  } else {
    console.log('There was an error');
  }
});
