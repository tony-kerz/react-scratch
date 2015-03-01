dbg = debug 'app:comments:comment-box'

app.CommentBox = React.createClass
  getInitialState: ->
    data: []

  loadCommentsFromServer: ->
    $.ajax
      url: this.props.url
      success: (data) =>
        @setState data: eval(data)
      error: (xhr, status, err) =>
        console.error @props.url, status, err.toString()

  componentDidMount: ->
    @loadCommentsFromServer()
    setInterval @loadCommentsFromServer, @props.pollInterval

  render: ->
    dbg 'render: this=%o', @
    r div,
      className: 'commentBox',
      r h1, {}, 'Comments'
      r app.CommentList, data: @state.data
      r app.CommentForm
