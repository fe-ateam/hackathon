var City = require('mongoose').model('City');

exports.getCities = function(req, res) {
  City.find({}).exec(function(err, cities) {
    res.send(cities);
  });
};

exports.getCityById = function(req, res) {
  City.findOne({ name: req.params.name }).exec(function(err, city) {
    res.send(city);
  });
};

function _calculateInflationPrice(price, currAge, retAge)
{	
	if(currAge > retAge)
	{
		return "Current Age Cannot Be Greater Than Retirement Age";
	}

	var yearsInTheFuture = retAge - currAge;
	var INFLATION_RATE = 0.02;
	var inflation_in_future = Math.pow(1+INFLATION_RATE, yearsInTheFuture);
	return Math.ceil((price*inflation_in_future*10)/10);
};

function _findItemsByCityAndCat(cityId, categoryName, cb) {
	City.findOne({name: cityId}).exec(function(err, city) {

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
	var cityId = req.params.name;
	var answerId = req.params.answerName;
    var currAge = req.params.ca;
    var retAge = req.params.ra;	

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

		if (price != null){
			res.send("" + _calculateInflationPrice(price, currAge, retAge));
		}
	});

	categoryName = "Buy Apartment Price";
	var itemNameSel3 = "Price per Square Meter to Buy Apartment in City Centre";
	var itemNameSel4 = "Price per Square Meter to Buy Apartment Outside of Centre";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

		//computed for 30 years to pay houses
	  	if(answerId === 'buyInCityCentre'){
	  		price = _findPrice(items, itemNameSel3) * 200 / 360;
		}
		if(answerId === 'buyOutsideCentre'){
			price = _findPrice(items, itemNameSel4) * 200 / 360;
		}
		if (price != null){
			res.send("" + _calculateInflationPrice(price, currAge, retAge));
		}
	});

};

exports.getTransportationMonthlyAmount = function(req, res) {
	var cityId = req.params.name;
	var answerId = req.params.answerName;
    var currAge = req.params.ca;
    var retAge = req.params.ra;	

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
			res.send("" + _calculateInflationPrice(price, currAge, retAge));
		}

	});
};

exports.getTravelMonthlyAmount = function(req, res) {
	var cityId = req.params.name;
	var answerId = req.params.answerName;
    var currAge = req.params.ca;
    var retAge = req.params.ra;	

	var price = 3000 * parseInt(answerId);

	if (price != null) {
		//compute monthly
		price = price / 12;
		res.send("" + _calculateInflationPrice(price, currAge, retAge));
	}

};
exports.getHobbyMonthlyAmount = function(req, res) {
	var cityId = req.params.name;
    var currAge = req.params.ca;
    var retAge = req.params.ra;	
    var answer= req.params.answerName;
    console.log(answer);

	var price = 0;

	if(answer[0] == 't')
	{
		price += 500;
		console.log('golf');
	}
   	if(answer[1] == 't')
	{
		price += 200;
		console.log('dancing');
	}
	if( answer[2] == 't')
	{
		price += 300;
		console.log('fishing');
	}
	if(answer[3] == 't')
	{
		price += 300;
		console.log('boating');
	}
	if(answer[4] == 't')
	{
		price += 200;
		console.log('gardening');
	}
	if (price != null) {
		res.send("" + _calculateInflationPrice(price, currAge, retAge));
	}
};

exports.getFoodMonthlyAmount = function(req, res) {
	var cityId = req.params.name;
	var answerId = req.params.answerName;
    var currAge = req.params.ca;
    var retAge = req.params.ra;	

	var price = null;

	var categoryName = "Restaurants";
	var itemNameSel1 = "Combo Meal at McDonalds or Similar";
	var itemNameSel2 = "Meal, Inexpensive Restaurant";
	var itemNameSel3 = "Meal for 2, Mid-range Restaurant, Three-course";

	_findItemsByCityAndCat(cityId, categoryName, function(items) {

		if(items == null){
			res.send("404 Not Found");
		}

		//computed monthly 2 meals a day for 22 days = 44
	  	if(answerId === 'cookAtHome'){
	  		price = _findPrice(items, itemNameSel1) * 44;
		}
		if(answerId === 'inexpensiveRestaurant'){
			price = _findPrice(items, itemNameSel2) * 44;
		}
	  	if(answerId === 'midRangeRestaurant'){
	  		price = _findPrice(items, itemNameSel3) * 44;
		}
		if(answerId === 'expensiveRestaurant'){
			price = _findPrice(items, itemNameSel3) * 2 * 44;
		}
  		if (price != null) {
  			res.send("" + _calculateInflationPrice(price, currAge, retAge));
  		}
	});
};