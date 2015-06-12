import React from 'react'
import CommentBox from './comments/comment-box'
import $ from 'jquery'

React.render(
  <CommentBox url='/api/comments' pollInterval='60000'/>,
  $('#content')[0]
)
