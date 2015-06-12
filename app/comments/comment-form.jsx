import React, {Component} from 'react'
import axios from 'axios'

class CommentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    let author = this.refs.author.getDOMNode().value.trim()
    let text = this.refs.text.getDOMNode().value.trim()
    if (text && author) {
      this.props.onCommentSubmit({author: author, text: text})
      this.refs.author.getDOMNode().value = ''
      this.refs.text.getDOMNode().value = ''
    }
  }

  render() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='your name' ref='author'/>
        <input type='text' placeholder='say something...' ref='text'/>
        <input type='submit' value='post'/>
      </form>
    )
  }
}

export default CommentForm
