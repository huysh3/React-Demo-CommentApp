import React, {Component} from 'react';

class CommentInput extends Component {
  constructor () {
    super();
    this.state = {
      id: '',
      username: '',
      content: ''
    };
    // 绑定函数
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.currentTarget.value
    });
  }

  handleContentChange (event) {
    this.setState({
      content: event.currentTarget.value
    });
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const {username, content} = this.state;
      const id = (new Date()).getTime();
      this.props.onSubmit({id, username, content});
    }
    this.setState({
      content: ''
    });
  }

  render () {
    return (
      // <div>CommentInput</div>
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名: </span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容: </span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
