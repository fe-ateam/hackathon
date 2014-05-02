var cityService = require('../services/city');

module.exports = function(app) {

  app.get('/cities', cityService.getCities);
  app.get('/cities/:name', cityService.getCityById);
  // app.get('/housing/:name/:answerName', cityService.getHousingMonthlyAmount);
  // app.get('/transportation/:name/:answerName', cityService.getTransportationMonthlyAmount);
  // app.get('/travel/:/:answerName', cityService.getTravelMonthlyAmount);
  // app.get('/hobby/:name/:answerName', cityService.getHobbyMonthlyAmount);
  // app.get('/food/:name/:answerName', cityService.getFoodMonthlyAmount);
  app.get('/housing/:name/:ca/:ra/:answerName', cityService.getHousingMonthlyAmount);
  app.get('/transportation/:name/:ca/:ra/:answerName', cityService.getTransportationMonthlyAmount);
  app.get('/travel/:name/:ca/:ra/:answerName', cityService.getTravelMonthlyAmount);
  app.get('/food/:name/:ca/:ra/:answerName', cityService.getFoodMonthlyAmount);

  app.get('/hobby/:name/:ca/:ra/:answerName', cityService.getHobbyMonthlyAmount);

};