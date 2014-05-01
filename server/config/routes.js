var cityService = require('../services/city');

module.exports = function(app) {

  app.get('/cities', cityService.getCities);
  app.get('/cities/:id', cityService.getCityById);
  app.get('/cities/:id/:selection', cityService.getHousingPriceSelection);
};