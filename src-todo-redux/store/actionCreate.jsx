import {
    CHANGE_INPUTVALUE, ADD_TODO_ITEM,
    DEL_TODO_ITEM, INIT_LIST,
    CHANGE_NEWINPUTVALUE, CHECKED,
    SCREEN
} from './actionType'

// import axios from 'axios'

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUTVALUE,
    value
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDelTodoItem = (index) => ({
    type: DEL_TODO_ITEM,
    index
})

export const getInitList = (data) => ({
    type: INIT_LIST,
    data
})
export const changeChecked = (index) => ({
    type: CHECKED,
    index
})
export const screen = (value) => ({
    type: SCREEN,
    value
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get("./list.json").then(
//             (res) => {
//                 const data = res.data
//                 const action = getInitList(data)
//                 dispatch(action)
//             })
//             .catch(() => {
//                 console.log("1")
//             })
//     }
// }

export const getNewChangeInputValueAction = (value, index) => ({
    type: CHANGE_NEWINPUTVALUE,
    value,
    index
})