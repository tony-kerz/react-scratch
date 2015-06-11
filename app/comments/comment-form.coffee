dbg = require('debug')('app:comments:comment-form')
React = require 'react'
{form, input} = React.DOM

module.exports = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    author = @refs.author.getDOMNode().value.trim()
    text = @refs.text.getDOMNode().value.trim()
    if text and author
      @props.onCommentSubmit author: author, text: text
      @refs.author.getDOMNode().value = ''
      @refs.text.getDOMNode().value = ''

  render: ->
    form className: 'commentForm', onSubmit: @handleSubmit,
      input type: 'text', placeholder: 'your name', ref: 'author'
      input type: 'text', placeholder: 'say something...', ref: 'text'
      input type: 'submit', value: 'post'
