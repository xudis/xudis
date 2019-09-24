import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    //经常性setState undefined  这是this得指向不对  这时只需要将他所在得方法改为箭头函数就行了
    search = () => {
        //得到输入关键字
        const searchName = this.input.value.trim()
        if (searchName) {
            //搜索
            PubSub.publish('search', searchName)
            //publish ('msgNAme',data)将要发布得数据
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Searcch Github User</h3>
                <div>
                    {/* 定义为非受控组建 */}
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

