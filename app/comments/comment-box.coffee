app.CommentBox = React.createClass
  render: ->
    r div,
      className: 'commentBox',
      r h1, {}, 'Comments'
      r app.CommentList
      r app.CommentForm
