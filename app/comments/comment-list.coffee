React = require 'react'
Comment = require './comment'
{createClass, createElement} = React
{div} = React.DOM

module.exports = createClass
  render: ->
    key = 0
    commentNodes = @props.data.map (comment) ->
      createElement Comment, key: key += 1, author: comment.author, comment.text
    div className: 'commentList',
      commentNodes
