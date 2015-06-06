dbg = require('debug')('app:server')
express = require 'express'
app = express()

require './init-db'

app.use express.static('./build/app')
app.use require('body-parser').json()
app.use '/comments', require('./comments/routes')

server = app.listen 3000, ->
  dbg 'listening at: %o', server.address()
