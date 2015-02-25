app.CommentList = React.createClass
  render: ->
    r div,
      className: 'commentList',
      r app.Comment,
        author: 'Pete Hunt',
        'This is one comment'
      r app.Comment,
        author: 'Jordan Walke',
        'This is *another* comment'
