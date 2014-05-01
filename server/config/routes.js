var cityService = require('../services/city');

module.exports = function(app) {

  app.get('/cities', cityService.getCities);
  app.get('/cities/:id', cityService.getCityById);
};