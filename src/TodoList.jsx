//-------------------------------容器组件-------------------------------------
import React, { Component } from "react";
import 'antd/dist/antd.css';
import axios from 'axios'
import store from './store/index'

// getTodoList 未引用   在redux-thunk使用时再调用
import {
    getChangeInputValueAction, getAddTodoItemAction,
    changeChecked, getDelTodoItem, getInitList,
    getNewChangeInputValueAction,
} from "./store/actionCreate"
import TodoListUI from "./store/TodoListUI";

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleNewInputChange = this.handleNewInputChange.bind(this)
        this.check = this.check.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDel = this.handleDel.bind(this)
        this.screen = this.screen.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }

    handleInputChange = (e) => {
        const inputValue = e.target.value
        const action = getChangeInputValueAction(inputValue);
        //当action完成时,通过dispatch(action)传给store  
        store.dispatch(action)
    }

    handleBtnClick = () => {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }

    handleDel = (index) => {
        const action = getDelTodoItem(index)
        store.dispatch(action)
        //通过dispatch来改变store中state的唯一途径
    }

    handleNewInputChange = (e, index) => {
        const inputValue = e.target.value
        const action = getNewChangeInputValueAction(inputValue, index);
        //当action完成时,通过dispatch(action)传给store  
        store.dispatch(action)
    }
    check = (index) => {

        const action = changeChecked(index)
        store.dispatch(action)
    }
    screen = (e) => {
        const value = e.target.value
        let newState = JSON.parse(JSON.stringify(store.getState()));
        switch (value) {
            case 'Active':
                newState.list = newState.list.filter((item) => {
                    return item.isChecked === false;
                })
                break;
            case 'Completed':
                newState.list = newState.list.filter((item) => {
                    return item.isChecked === true;
                })
                break;
            default: break;
        }
        this.setState(newState);
        //这里不需要对数组进行更新,只是数组中数据的筛选,不用dispatch

    }
    componentDidMount() {
        axios.get("./list.json").then(
            (res) => {
                const data = [...res.data]
                const action = getInitList(data)
                store.dispatch(action)
            })
            .catch(() => {
                console.log("1")
            })
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleNewInputChange={this.handleNewInputChange}
                handleBtnClick={this.handleBtnClick}
                handleDel={this.handleDel}
                check={this.check}
                screen={this.screen} />
        )
    }
}