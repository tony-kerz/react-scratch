dbg = debug 'app:comments:comment-box'

app.CommentBox = React.createClass
  getInitialState: ->
    data: []

  loadCommentsFromServer: ->
    axios.get @props.url
    .then (res) =>
      @setState data: res.data
    .catch (err) ->
      console.error 'load-comments-from-server: err=%o', err

  handleCommentSubmit: (comment) ->
    dbg 'handle-comment-submit: comment=%o', comment
    axios.post @props.url, comment
    .then (res) =>
      dbg 'handle-comment-submit: res=%o', res
      #@setState data: res.data
      @loadCommentsFromServer()
    .catch (err) ->
      console.error 'handle-comment-submit: err=%o', err

  componentDidMount: ->
    @loadCommentsFromServer()
    #setInterval @loadCommentsFromServer, @props.pollInterval

  render: ->
    dbg 'render: this=%o', @
    r div,
      className: 'commentBox',
      r h1, {}, 'Comments'
      r app.CommentList, data: @state.data
      r app.CommentForm, onCommentSubmit: @handleCommentSubmit
