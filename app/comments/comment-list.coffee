app.CommentList = React.createClass
  render: ->
    key = 0
    commentNodes = @props.data.map (comment) ->
      r app.Comment, key: key += 1, author: comment.author, comment.text
    r div,
      className: 'commentList',
      commentNodes
