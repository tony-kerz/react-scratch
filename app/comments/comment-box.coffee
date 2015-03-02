dbg = debug 'app:comments:comment-box'

app.CommentBox = React.createClass
  getInitialState: ->
    data: []

  loadCommentsFromServer: ->
    $.ajax
      url: @props.url
      success: (data) =>
        @setState data: data
      error: (xhr, status, err) =>
        console.error @props.url, status, err.toString()

  handleCommentSubmit: (comment) ->
    dbg 'handle-comment-submit: comment=%o', comment
    $.ajax
      url: @props.url
      dataType: 'json'
      type: 'POST'
      data: comment
      success: (data) =>
        dbg 'handle-comment-submit: data=%o', data
        @setState data: data
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
      r app.CommentForm, onCommentSubmit: @handleCommentSubmit
