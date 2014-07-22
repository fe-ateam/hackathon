var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  price:  { type: String, required: true }
});
var CategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  items: [ItemSchema]
});
var CitySchema = mongoose.Schema({
  name: { type: String, required: true },
  categories: [CategorySchema]
});
var City = mongoose.model('City', CitySchema);

function createDefaultCities() {
  City.find({}).exec(function(err, collection) {
    if(collection.length === 0) {

      function onSave(err, city) {
        if (err) {
          console.error(err);
          return;
        }

        console.log('Created ' + city.name);
      }

      var fs = require('fs');
      var file = __dirname + '/../../100citiesdefault.json';
       
      fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          console.log('Error: ' + err);
          return;
        }
       
        data = JSON.parse(data);
        City.create(data);
      });
    }
  })
}

exports.createDefaultCities = createDefaultCities;
