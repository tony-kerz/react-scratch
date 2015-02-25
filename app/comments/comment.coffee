app.Comment = React.createClass
  render: ->
    r div, className: 'comment',
      r h2, className: 'commentAuthor',
        @props.author
      @props.children
