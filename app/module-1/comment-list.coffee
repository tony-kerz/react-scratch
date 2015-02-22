{createClass, DOM} = React
{div} = DOM

app.CommentList = createClass
  render: ->
    div className: 'commentList',
      'Hello, world! I am a CommentList.'
