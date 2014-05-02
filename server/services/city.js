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

// exports.getHousingPriceSelection = function(req, res) {
// 	var cityId = req.params.id;
// 	var answerId = req.params.selection;

// 	var categoryName = "Rent Per Month";
// 	var itemNameSel1 = "Apartment (1 bedroom) in City Centre";
// 	var itemNameSel2 = "Apartment (1 bedroom) Outside of Centre";

// 	City.findOne({_id: cityId}).exec(function(err, city) {

// 		var categories = city.categories;
// 		var items = null;

// 		for(var category in categories){
// 			if(categoryName == categories[category].name){
// 				items = categories[category].items;
// 			}
// 		}

// 		if(items == null){
// 			res.send("404 Not Found");
// 		}

// 	  	if(answerId === '1'){
// 			for(var item in items){
// 				var itemPair = items[item];
// 				if(typeof itemPair.name != 'undefined' 
// 					&& typeof itemPair.price != 'undefined'
// 					&& itemPair.name == itemNameSel1){
// 					res.send(itemPair.price);
// 				}
// 			}
// 		}
// 		if(answerId === '2'){
// 			for(var item in items){
// 				var itemPair = items[item];
// 				if(typeof itemPair.name != 'undefined' 
// 					&& typeof itemPair.price != 'undefined'
// 					&& itemPair.name == itemNameSel2){
// 					res.send(itemPair.price);
// 				}
// 			}
// 		}
// 	});
// };

function _findItemsByCityAndCat(cityId, categoryName, cb) {
	City.findOne({_id: cityId}).exec(function(err, city) {

		var categories = city.categories;

		for(var category in categories){
			if(categoryName == categories[category].name){
				var items = categories[category].items;
				cb(items);
				break;
			}
		}
	});
};

function _findPrice(items, itemName) {

	for (var i = 0; i < items.length; i++) {

		var item = items[i];

		if (typeof item.name != 'undefined' 
			&& typeof item.price != 'undefined'
			&& item.name == itemName) {

			var price = item.price.split(',').join('');

			console.log(item.name + ' price: ' +  price);

			return parseFloat(price);
		}
	}

	return null;
}

exports.getHousingMonthlyAmount = function(req, res) {
	var cityId = req.params.id;
	var answerId = req.params.answerName;

	var price = null;

	var categoryName = "Rent Per Month";
	var itemNameSel1 = "Apartment (3 bedrooms) in City Centre";
	var itemNameSel2 = "Apartment (3 bedrooms) Outside of Centre";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

	  	if(answerId === 'rentInCentre'){
	  		price = _findPrice(items, itemNameSel1);
		}
		if(answerId === 'rentOutsideCentre'){
			price = _findPrice(items, itemNameSel2);
		}

	});

	categoryName = "Buy Apartment Price";
	var itemNameSel3 = "Price per Square Meter to Buy Apartment in City Centre";
	var itemNameSel4 = "Price per Square Meter to Buy Apartment Outside of Centre";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

	  	if(answerId === 'buyInCityCentre'){
	  		price = _findPrice(items, itemNameSel3) * 200;
		}
		if(answerId === 'buyOutsideCentre'){
			price = _findPrice(items, itemNameSel4) * 200;
		}
	});

	if (price != null){
		res.send("" + price);
	}
};

exports.getTransportationMonthlyAmount = function(req, res) {
	var cityId = req.params.id;
	var answerId = req.params.answerName;

	var price = null;

	var categoryName = "Transportation";
	var itemNameSel1 = "Monthly Pass (Regular Price)";
	var itemNameSel2 = "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

		if (answerId === 'publicTransportation'){
	  		price = _findPrice(items, itemNameSel1);
			console.log('***' + price);
		}
	  	
		if (answerId === 'midRangeCar'){
	  		price = _findPrice(items, itemNameSel2);
			//compute monthly
			price = price / (10 * 12);
		}

		if (answerId === 'luxuryCar'){
	  		price = _findPrice(items, itemNameSel2) * 2;
			//compute monthly
			price = price / (10 * 12);
		}

		if (price != null) {
			res.send("" + price);
		}

	});
};

exports.getTravelMonthlyAmount = function(req, res) {
	var cityId = req.params.id;
	var answerId = req.params.answerName;

	var price = 3000 * parseInt(answerId);

	if (price != null) {
		//compute monthly
		price = price / 12;
		res.send("" + price);
	}

};
exports.getHobbyMonthlyAmount = function(req, res) {
	var cityId = req.params.id;
	var answerId = req.params.answerName;
	var price = 0;

   
	for(var i = 0; i < answerId.length; i++){
	  	if(answerId[i] === 'golf'){
	  		price = price + 500;
		}
	  	if(answerId[i] === 'dancing'){
	  		price = price + 200;
		}
	  	if(answerId[i] === 'fishing'){
	  		price = price + 300;
		}
	  	if(answerId[i] === 'boating'){
	  		price = price + 300;
		}
	  	if(answerId[i] === 'gardening'){
	  		price = price + 200;
		}
	}

	if (price != null) {
		res.send("" + price);
	}
};

exports.getFoodMonthlyAmount = function(req, res) {
	var cityId = req.params.id;
	var answerId = req.params.answerName;

	var price = null;

	var categoryName = "Restaurants";
	var itemNameSel1 = "Combo Meal at McDonalds or Similar";
	var itemNameSel2 = "Meal, Inexpensive Restaurant";
	var itemNameSel3 = "Meal for 2, Mid-range Restaurant, Three-course";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

		//computed monthly 2 meals a day for 15 days = 30
	  	if(answerId === 'cookAtHome'){
	  		price = _findPrice(items, itemNameSel1) * 30;
		}
		if(answerId === 'inexpensiveRestaurant'){
			price = _findPrice(items, itemNameSel2) * 30;
		}
	  	if(answerId === 'midRangeRestaurant'){
	  		price = _findPrice(items, itemNameSel3) * 30;
		}
		if(answerId === 'expensiveRestaurant'){
			price = _findPrice(items, itemNameSel3) * 2 * 30;
		}
  		if (price != null) {
  			res.send("" + price);
  		}
	});
};