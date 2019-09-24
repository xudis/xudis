import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Main extends Component {
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    componentDidMount() {
        //订阅search发布得消息
        //消息名,回调函数(msg,data)(可改)
        PubSub.subscribe('search', (msg, searchName) => {//指定新的searchName需要请求
            this.setState({
                initView: false,
                loading: true
            })
            //发生Ajax请求
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then(response => {
                //得到响应数据
                const result = response.data
                console.log(result)
                //更新状态(成功)
                const users = result.items.map(item => {
                    return { name: item.login, url: item.html_url, avatarUrl: item.avatar_Url }
                })
                this.setState({ loading: false, users })
            }).catch(error => {
                //更新状态(失败)
                this.setState({ loading: false, errorMsg: error.message })

            })

        })
    }

    render() {
        const { searchName } = this.props

        const { initView, loading, users, errorMsg } = this.state
        console.log('render()', searchName)
        if (initView) {
            return <h2>请输入关键字进行搜索:{searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                < div className="row" >

                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>

                                <a href={user.url} target="_blank" rel="noopener noreferrer"  >
                                    <img src={user.avatarUrl} style={{ width: 100 }} alt="untitle" />
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }

                </div >
            )
        }
    }
}

