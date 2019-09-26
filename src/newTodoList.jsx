import React, { Component } from 'react'
// import newStore from "./newStore"
import { connect } from 'react-redux';

class NewTodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button>提交</button>
                    <ul>
                        <li>hello</li>
                    </ul>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log("11", state.inputValue)
    return {
        // prop: state.prop
        inputValue: state.inputValue

    }

}
//store.dispatch.props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const inputValue = e.target.value
            const action = {
                type: 'change_input_value',
                value: inputValue
            }
            console.log("111", action)
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoList);