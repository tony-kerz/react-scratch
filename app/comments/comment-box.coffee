app.CommentBox = React.createClass
  render: ->
    r div,
      className: 'commentBox',
      r h1, {}, 'Comments'
      r app.CommentList, data: @props.data
      r app.CommentForm
