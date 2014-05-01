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

exports.getHousingPriceSelection = function(req, res) {
  City.findOne({ _id: req.params.id }).exec(function(err, city) {
	var housingPrice = "0";
	var selection = req.params.selection;
	console.log(selection);
	var catindex = 0;
  	if(selection === '1'){
  		console.log('selection 1');
  		var cats = city.categories;
  		console.log("cats length=" + cats.length);
  		for (var i = 0; i < cats.length; i++){
  			console.log("cats" + i + "==" + cats[i].name);
  			if(cats[i].name === "Rent Per Month") {
  				console.log("HERE!!!");
  				catindex = i;
  			}
  		}
  		var items = city.categories[catindex].items;
  		console.log("items length=" + items.length);
  		for (var i = 0; i < items.length; i++){
  			console.log("items" + i + "==" + items[i].name);
  			if(items[i].name === "Apartment (1 bedroom) in City Centre"){
  				console.log("HERE2!!!");
  				housingPrice = items[i].price;
  			}
		}
  		console.log(housingPrice);
  	}
  	if(selection === '2'){
  		console.log('selection 2');
	  	//housingPrice = city.category.item("Apartment (1 bedroom) Outside of Centre").price;
  	}
    res.send(housingPrice);
  });
};