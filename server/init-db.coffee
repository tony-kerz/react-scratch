dbg = require('debug')('app:init-db')
cfg = require './config'
dbName = cfg.db.name
comments = cfg.db.comments
r = require './db-ref.coffee'

module.exports = (->
  r.dbList().then((result) ->
    dbg 'db-list.then'
    if dbName not in result
      r.dbCreate(dbName).then((result) ->
        dbg 'db-create.then'
      )
  ).then(->
    dbg 'db-list.then.2'
    r.tableList().then((result) ->
      dbg 'table-list.then'
      if comments not in result
        r.tableCreate(comments).then((result) ->
          dbg 'table-create.then'
          for comment in require('./comments/seeds')
            r.table(comments).insert(comment).then((result) ->
              dbg 'insert.then'
              r.table(comments).get(result.generated_keys[0]).then((result) ->
                dbg 'get.then: seed: %o', result
              )
            )
        )
    )
  )
)()
