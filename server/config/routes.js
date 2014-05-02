var cityService = require('../services/city');

module.exports = function(app) {

  app.get('/cities', cityService.getCities);
  app.get('/cities/:id', cityService.getCityById);
  app.get('/housing/:id/:answerName', cityService.getHousingMonthlyAmount);
  app.get('/transportation/:id/:answerName', cityService.getTransportationMonthlyAmount);
  app.get('/travel/:id/:answerName', cityService.getTravelMonthlyAmount);
  app.get('/hobby/:id/:answerName', cityService.getHobbyMonthlyAmount);
  app.get('/food/:id/:answerName', cityService.getFoodMonthlyAmount);
};