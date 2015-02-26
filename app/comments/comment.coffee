converter = new Showdown.converter()

app.Comment = React.createClass
  render: ->
    rawMarkup = converter.makeHtml @props.children.toString()
    r div, className: 'comment',
      r h2, className: 'commentAuthor',
        @props.author
        r span,
        dangerouslySetInnerHTML:
          __html: rawMarkup
