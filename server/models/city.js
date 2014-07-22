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

      var city = new City();
      city.name = "San Jose, CA";
      city.category.push({name: "Restaurant", items: [{ name: "Meal, Inexpensive Restaurant", price: "8.00" },{name: "Meal for 2, Mid-range Restaurant, Three-course", price: "45.00"}]});
      city.save(onSave);

      city = new City();
      city.name = "San Francisco";
      city.state = "CA";
      city.costs.push({ name: 'Meal, Inexpensive Restaurant', category: 'Food', amount: 12 });
      city.costs.push({ name: 'Meal, Mid-range Restaurant', category: 'Food', amount: 70 });
      city.costs.push({ name: 'Meal, Fastfood', category: 'Food', amount: 6 });
      city.costs.push({ name: 'Utilities', category: 'Utilities', amount: 85.08, days: 30 });
      city.costs.push({ name: '1-bedroom Apartment in City Centre', category: 'Rent', amount: 2641.73, days: 30 });
      city.costs.push({ name: '1-bedroom Apartment outside of Centre', category: 'Rent', amount: 1838.81, days: 30 });
      city.costs.push({ name: '3-bedroom big Apartment in City Centre', category: 'Rent', amount: 4500.00, days: 30 });
      city.costs.push({ name: '3-bedroom big Apartment outside of Centre', category: 'Rent', amount: 3297.06, days: 30 });
      city.save(onSave);
    }
  })
}

exports.createDefaultCities = createDefaultCities;
