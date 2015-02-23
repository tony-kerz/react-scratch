reactSugar()

app.CommentBox = createClass
  render: ->
    div className: 'commentBox',
      h1 {}, 'Comments'
      createElement app.CommentList
      createElement app.CommentForm
