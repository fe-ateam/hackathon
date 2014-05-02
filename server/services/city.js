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
	var cityId = req.params.id;
	var answerId = req.params.selection;

	var categoryName = "Rent Per Month";
	var itemNameSel1 = "Apartment (1 bedroom) in City Centre";
	var itemNameSel2 = "Apartment (1 bedroom) Outside of Centre";

	City.findOne({_id: cityId}).exec(function(err, city) {

		var categories = city.categories;
		var categoryItems = null;

		for(var category in categories){
			if(categoryName == categories[category].name){
				categoryItems = categories[category].items;
			}
		}

		if(categoryItems == null){
			res.send("404 Not Found");
		}

	  	if(answerId === '1'){
			for(var item in categoryItems){
				var itemPair = categoryItems[item];
				if(typeof itemPair.name != 'undefined' 
					&& typeof itemPair.price != 'undefined'
					&& itemPair.name == itemNameSel1){
					res.send(itemPair.price);
				}
			}
		}
		if(answerId === '2'){
			for(var item in categoryItems){
				var itemPair = categoryItems[item];
				if(typeof itemPair.name != 'undefined' 
					&& typeof itemPair.price != 'undefined'
					&& itemPair.name == itemNameSel2){
					res.send(itemPair.price);
				}
			}
		}
	});
};

exports.getHousingPriceSelection2 = function(req, res) {
  City.findOne({ _id: req.params.id }).exec(function(err, city) {
	var housingPrice = "0";
	var selection = req.params.selection;
	console.log(selection);
	var catindex = 0;
  	if(selection === '1'){
  		console.log('selection 1');
  		var cats = city.categories;
  		for (var i = 0; i < cats.length; i++){
  			if(cats[i].name === "Rent Per Month") {
  				catindex = i;
  			}
  		}
  		var items = city.categories[catindex].items;
  		for (var i = 0; i < items.length; i++){
  			if(items[i].name === "Apartment (1 bedroom) in City Centre"){
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