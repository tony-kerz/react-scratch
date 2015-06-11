dbg = require('debug')('app:comments:comment-box')
React = require 'react'
axios = require 'axios'
CommentList = require './comment-list'
CommentForm = require './comment-form'
{createClass, createElement} = React
{div, h1} = React.DOM

module.exports = createClass
  getInitialState: ->
    data: []

  loadCommentsFromServer: ->
    axios.get @props.url
    .then (res) =>
      @setState data: res.data
    .catch (err) ->
      console.error 'load-comments-from-server: err=%o', err

  handleCommentSubmit: (comment) ->
    dbg 'handle-comment-submit: comment=%o', comment
    axios.post @props.url, comment
    .then (res) =>
      dbg 'handle-comment-submit: res=%o', res
      #@setState data: res.data
      @loadCommentsFromServer()
    .catch (err) ->
      console.error 'handle-comment-submit: err=%o', err

  componentDidMount: ->
    @loadCommentsFromServer()
    #setInterval @loadCommentsFromServer, @props.pollInterval

  render: ->
    dbg 'render: this=%o', @
    div className: 'commentBox',
      h1 {}, 'Comments'
      createElement CommentList, data: @state.data
      createElement CommentForm, onCommentSubmit: @handleCommentSubmit
