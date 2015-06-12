import React, {Component} from 'react'
import axios from 'axios'
import CommentList from './comment-list'
import CommentForm from './comment-form'

import debug from 'debug'
let dbg = debug('app:comments:comment-box')

class CommentBox extends Component {
  constructor() {
    super()
    this.state = {data: []}
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
    .then((res) => {
      dbg('load-comments-from-server: res.data=%o', res.data)
      this.setState({data: res.data})
    })
    .catch((err) => {
      console.error('load-comments-from-server: err=%o', err)
    })
  }

  handleCommentSubmit = (comment) => {
    dbg('handle-comment-submit: comment=%o', comment)
    axios.post(this.props.url, comment)
    .then((res) => {
      dbg('handle-comment-submit: res=%o', res)
      this.loadCommentsFromServer()
    })
    .catch((err) => {
      console.error('handle-comment-submit: err=%o', err)
    })
  }

  componentDidMount() {
    dbg('component-did-mount')
    this.loadCommentsFromServer()
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  }

  render() {
    dbg('render: this.state.data=%o', this.state.data)
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
}

export default CommentBox
