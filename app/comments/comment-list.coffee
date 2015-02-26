app.CommentList = React.createClass
  render: ->
    commentNodes = @props.data.map (comment) ->
      r app.Comment, author: comment.author, comment.text
    r div,
      className: 'commentList',
      commentNodes
