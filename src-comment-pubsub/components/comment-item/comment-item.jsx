import React, { Component } from 'react'
import PubSub from "pubsub-js"
import './comment-item.css'

import PropTypes from 'prop-types'

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    }
    handleClick = () => {
        const { comment, index } = this.props
        //提示
        if (window.confirm(`确定删除${comment.username}的评论?`)) {
            //确定删除
            PubSub.publish('delComment', index)
        }
    }
    render() {
        const { comment } = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user">
                    <span>{comment.username}</span><span>说:</span></p>
                <p className="cnetence">{comment.content}</p>
            </li>

        )

    }
}

