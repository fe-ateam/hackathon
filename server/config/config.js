var path = require('path');

module.exports = {
  development: {
    db: 'mongodb://localhost/hackathon',
    rootPath: path.normalize(__dirname + '/../../'),
    port: process.env.PORT || 3000
  }
  , production: {
    db: 'mongodb://heroku_app27660518:87rbfojvie5quidg02m374ula7@ds027479.mongolab.com/heroku_app27660518',
    rootPath: path.normalize(__dirname + '/../../'),
    port: 27479
  }
}
