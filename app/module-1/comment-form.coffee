{createClass, DOM} = React
{div} = DOM

app.CommentForm = createClass
  render: ->
    div className: 'commentForm',
      'Hello, world! I am a CommentForm.'
