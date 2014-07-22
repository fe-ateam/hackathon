var mongoose = require('mongoose')
  , cityModel = require('../models/city');

module.exports = function(config) {

  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('hackathon db opened for ' + config.name + 
    	' on port ' + config.port);
  });

  // Populate default data
  cityModel.createDefaultCities();
};

