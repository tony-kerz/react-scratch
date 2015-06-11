module.exports = require('rethinkdbdash')(
  host: '192.168.99.100'
  port: 32768
  db: require('./config').db.name
)
