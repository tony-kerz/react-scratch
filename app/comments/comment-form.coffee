dbg = debug 'app:comments:comment-form'

app.CommentForm = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    author = @refs.author.getDOMNode().value.trim()
    text = @refs.text.getDOMNode().value.trim()
    if text and author
      @props.onCommentSubmit author: author, text: text
      @refs.author.getDOMNode().value = ''
      @refs.text.getDOMNode().value = ''

  render: ->
    r form, className: 'commentForm', onSubmit: @handleSubmit,
     r input, type: 'text', placeholder: 'your name', ref: 'author'
     r input, type: 'text', placeholder: 'say something...', ref: 'text'
     r input, type: 'submit', value: 'post'
