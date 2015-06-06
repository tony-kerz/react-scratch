router = require('express').Router()
comments = require('../config').db.comments
r = require '../db-ref.coffee'
dbg = require('debug')('srv:comments:routes')

router.get '/', (req, res) ->
  r.table(comments).then((result) ->
    res.send(result)
  )

router.post '/', (req, res) ->
  dbg 'req: %o', req.body
  r.table(comments).insert(req.body).then((result) ->
    location = "#{req.baseUrl}/#{result.generated_keys[0]}"
    dbg "location: #{location}"
    res.location(location).status(201).send(req.body)
  )

module.exports = router
