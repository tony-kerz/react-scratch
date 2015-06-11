dbg = require('debug')('app:')
React = require 'react'
CommentBox = require './comments/comment-box'
{render, createElement} = React
$ = require 'jquery'

render(
  createElement CommentBox, url: '/api/comments', pollInterval: 60000
  $('#content')[0]
)
