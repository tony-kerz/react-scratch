dbg = require('debug')('app:comment')
React = require 'react'
Showdown = require 'showdown'
converter = new Showdown.Converter()
{div, h2, span} = React.DOM

module.exports = React.createClass
  render: ->
    rawMarkup = converter.makeHtml @props.children.toString()
    div className: 'comment',
      h2 className: 'commentAuthor',
        @props.author
      span dangerouslySetInnerHTML: __html: rawMarkup
