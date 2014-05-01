var path = require('path');

module.exports = {
  development: {
    db: 'mongodb://localhost/hackathon',
    rootPath: path.normalize(__dirname + '/../../'),
    port: process.env.PORT || 3000
  }
  //, production: {...}
}