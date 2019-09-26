
import {
    CHANGE_INPUTVALUE, ADD_TODO_ITEM,
    DEL_TODO_ITEM, INIT_LIST,
    CHANGE_NEWINPUTVALUE, CHECKED, SCREEN
} from './actionType'
const defaultState = {
    //现在store两个默认的数据,由reducer管理
    inputValue: '',
    list: []
}
//reducer  可以接收state ,但是不可以修改state
export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUTVALUE) {
        //对state进行深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        if (action.value)
            newState.inputValue = action.value
        return newState
    }

    if (action.type === CHANGE_NEWINPUTVALUE) {
        //对state进行深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.list[action.index].text = action.value

        return newState
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue.trim()) {
            newState.list.unshift({ text: newState.inputValue.trim(), isChecked: false })
        }
        console.log(newState.list)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1);
        return newState;
    }

    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState;
    }
    if (action.type === CHECKED) {
        const newState = JSON.parse(JSON.stringify(state))
        // newState.list[action.index].isChecked != newState.list[action.index].isChecked
        if (newState.list[action.index].isChecked) {
            newState.list[action.index].isChecked = false
        } else {
            newState.list[action.index].isChecked = true
        }
        return newState;
    }
    if (action.type === SCREEN) {
        return state;
    }
    return state;
}