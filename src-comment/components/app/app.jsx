import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

// import CommentItem from '../comment-item/comment-item'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                { username: 'Tom', content: 'SSS' },
                { username: 'Jack', content: 'BBB' },
            ]
        }
    }
    /**给组件对象添加state对象
     * state = {
        comments: [
            { username: 'Tom', content: 'SSS' },
            { username: 'Jack', content: 'BBB' },
        ]
    }
     */
    //添加评论
    addComment = (comment) => {
        const { comments } = this.state
        comments.unshift(comment)
        //更新状态
        this.setState({ comments })
    }
    //删除评论
    delComment = (index) => {
        const { comments } = this.state
        comments.splice(index, 1)
        //更新状态
        this.setState({ comments })
    }


    render() {
        return (
            <div>
                <header>
                    <div className="site-header jumbortron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对react 的评论</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={this.state.comments} delComment={this.delComment} />
                </div>
            </div>
        )
    }
}