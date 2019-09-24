import React, { Component } from 'react'
import './comment-list.css'
import CommentItem from '../comment-item/comment-item'
import PropTypes from 'prop-types'
export default class CommentList extends Component {
    //给组建类指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired,

    }

    render() {
        const { comments, delComment } = this.props
        //计算是否显示<h2></h2>
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复:</h3>
                <h2 style={{ display }}>暂无评论,点击左侧添加评论!!</h2>
                <ul className="list-group">
                    {
                        /**组件中的comment是CommentItem中的comment */
                        comments.map((comment1, index) => <CommentItem comment={comment1} key={index} />)
                    }

                </ul>
            </div>
        )
    }
}

