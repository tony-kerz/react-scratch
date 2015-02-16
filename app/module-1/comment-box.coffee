{div} = React.DOM

@app.CommentBox = React.createClass
  render: ->
    div className: 'commentBox',
      'Hello, world! I am a CommentBox.'
