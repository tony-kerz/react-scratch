{createClass, createElement, DOM} = React
{div, h1} = DOM

app.CommentBox = createClass
  render: ->
    div className: 'commentBox',
      h1 {}, 'Comments'
      createElement app.CommentList
      createElement app.CommentForm
