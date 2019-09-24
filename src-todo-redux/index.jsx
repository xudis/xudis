import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import NewTodoList from "./newTodoList"
import { Provider } from 'react-redux'
import newStore from './newStore'

const APP = (
    <Provider store={newStore}>
        <NewTodoList />
    </Provider>
)

ReactDOM.render(<TodoList />, document.getElementById("root"));
ReactDOM.render(APP, document.getElementById("Root"));