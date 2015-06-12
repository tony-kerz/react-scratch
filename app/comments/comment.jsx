import React, {Component} from 'react'
import marked from 'marked'
import debug from 'debug'
let dbg = debug('app:comments:comment')

class Comment extends Component {
  render() {
    dbg('render: this=%o', this)
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    dbg('render: raw-markup=%s', rawMarkup)
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>{this.props.author}</h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
      </div>
    )
  }
}

export default Comment
