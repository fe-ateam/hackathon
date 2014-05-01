var City = require('mongoose').model('City');

exports.getCities = function(req, res) {
  City.find({}).exec(function(err, cities) {
    res.send(cities);
  });
};

exports.getCityById = function(req, res) {
  City.findOne({ _id: req.params.id }).exec(function(err, city) {
    res.send(city);
  });
};

exports.getHousingPriceSelection = function(selection, req, res) {
  City.findOne({ _id: req.params.id }).exec(function(err, city) {
	var housingPrice = "0";
  	if(req.params.selection === 1){
  		log.console('selection 1');
	  	//housingPrice = city.category.item("Apartment (1 bedroom) in City Centre").price;
  	}
  	else if(req.params.selection === 2){
  		log.console('selection 1');
	  	//housingPrice = city.category.item("Apartment (1 bedroom) Outside of Centre").price;
  	}
    res.send(housingPrice);
  });
};