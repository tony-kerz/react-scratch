argv = require('minimist')(process.argv.slice 2)
gulp = require 'gulp'
plug = require('gulp-load-plugins')()
bower = require 'main-bower-files'
run = require 'run-sequence'
del = require 'del'
lazy = require 'lazypipe'
merge = require 'merge-stream'
karma = require('karma').server
fs = require('fs')
bodyParser = require('body-parser')
dbg = require('debug')('gulpfile')

build = 'build'
buildApp = "#{build}/app"
buildTest = "#{build}/test"
buildVendor = "#{buildApp}/vendor"

optStream = (file) ->
  lazy()
  .pipe plug.concat, file
  .pipe plug.rev

optJsStream = (name) ->
  optStream("#{name}.min.js")
  .pipe plug.uglify

optCssStream = (name) ->
  optStream("#{name}.min.css")
  .pipe plug.minifyCss

gulp.task 'karma', (done) ->
  karma.start
    configFile: "#{__dirname}/karma.conf.coffee"
    basePath: buildApp
    singleRun: true
    ,
    done

gulp.task 'coffee-test', ->
  gulp.src ['app/**/*.spec.coffee']
  .pipe plug.coffee().on 'error', plug.util.log
  .pipe gulp.dest buildTest

gulp.task 'coffee', ->
  gulp.src ['app/**/*.coffee', '!app/**/*.spec.coffee']
  .pipe plug.coffee().on 'error', plug.util.log
  .pipe plug.if argv.optimize, optJsStream('app')()
  .pipe plug.sweetjs(
    modules: ['./sweet/react-sugar.sjs']
    readableNames: true
  )
  .on 'error', plug.util.log
  .pipe gulp.dest buildApp

gulp.task 'static', ->
  gulp.src ['app/**/*.json']
  .pipe gulp.dest buildApp

#gulp.task 'sass', ->
#  gulp.src 'app/app.scss'
#  .pipe plug.sass(includePaths: ['bower_components'], sourceComments: 'normal')
#  .pipe plug.if argv.optimize, optCssStream('app')()
#  .pipe gulp.dest buildApp

gulp.task 'bower', ->

  bowerStream = (suffix, optStream, dest) ->
    gulp.src bower(filter: new RegExp "^.*\.#{suffix}$"), base: 'bower_components'
    .pipe plug.if argv.optimize, optStream
    .pipe gulp.dest dest

  js = bowerStream 'js', optJsStream('vendor')(), buildVendor
  css = bowerStream 'css', optCssStream('vendor')(), buildVendor
  fontDest = if argv.optimize then "#{build}/fonts" else buildVendor
  font = bowerStream '(eot|svg|ttf|woff)', plug.flatten(), fontDest

  merge js, css, font

gulp.task 'index', ->
  sources = gulp.src ["#{buildApp}/**/*.js", "#{buildApp}/**/*.css", "!#{buildVendor}/**", "!#{buildApp}/index.js"], read: false
  bower_sources = gulp.src ["#{buildVendor}/**/*.js", "#{buildVendor}/**/*.css"], read: false

  gulp.src 'app/index.html'
  .pipe plug.inject sources, ignorePath: buildApp
  .pipe plug.inject bower_sources, ignorePath: buildApp, name: 'bower'
  .pipe gulp.dest buildApp

gulp.task 'watch', ->
  #gulp.watch 'app/**/*.scss', ['sass']
  gulp.watch 'app/**/*.coffee', ['coffee']
  gulp.watch 'app/index.html', ['index']

gulp.task 'server', ->
  gulp.src buildApp
  .pipe plug.webserver(
    livereload: false
    directoryListing: false
    open: true
    middleware: [
      bodyParser.urlencoded extended: false

      (req, res, next) ->
        dbg 'url=%s, method=%s', req.url, req.method
        if (req.url == '/comments.json') and (req.method == 'POST')
          fileName = "#{buildApp}/comments.json"
          fs.readFile fileName, (err, data) ->
            if err
              console.log 'read-file: err=%o', err
            comments = JSON.parse data
            dbg 'comments=%o, body=%o', comments, req.body
            comments.push req.body
            fs.writeFile fileName, JSON.stringify(comments, null, 4), (err) ->
              if err
                console.log 'write-file: err=%o', err
              res.setHeader 'Content-Type', 'application/json'
              res.setHeader 'Cache-Control', 'no-cache'
              res.end JSON.stringify(comments)
        else
          next()
    ]
#    proxies: [
#      source: '/api'
#      target: 'http://localhost:3000/api'
#    ]
  )

gulp.task 'clean', (cb) ->
  del ['build'], cb

gulp.task 'build', (cb) ->
  run('clean', ['coffee', 'bower', 'static'], 'index', cb)

gulp.task 'default', (cb) ->
  run('build', 'watch', 'server', cb)

gulp.task 'test', (cb) ->
  run('build', 'coffee-test', 'karma', cb)
