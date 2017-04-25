import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    render() {
        return (
            <div className="commentAppContainer">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

export default CommentApp