import React, {Component} from 'react'
import Comment from './comment'
import debug from 'debug'
let dbg = debug('app:comments:comment-list')

class CommentList extends Component {
  render() {
    dbg('render: this.props=%o', this.props)
    let key = 0
    var commentNodes = this.props.data.map((comment) => {
      return <Comment key={key += 1} author={comment.author}>{comment.text}</Comment>
    })

    dbg('render: comment-nodes=%o', commentNodes)

    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
}

export default CommentList
