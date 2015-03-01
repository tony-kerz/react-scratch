dbg = debug 'app:comments:comment-box'

app.CommentBox = React.createClass
  render: ->
    dbg 'render: this=%o', @
    r div,
      className: 'commentBox',
      r h1, {}, 'Comments'
      r app.CommentList, data: @props.data
      r app.CommentForm
