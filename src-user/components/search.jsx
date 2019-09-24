import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component {
    static propsTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    search = () => {
        //得到输入关键字
        const searchName = this.input.value.trim()
        if (searchName) {
            //搜索
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Searcch Github User</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

