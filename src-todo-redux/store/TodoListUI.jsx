//--------------------------UI组件------------------------------------------
import React from "react";
import { Input, Button, List, Checkbox } from 'antd';

const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    onChange={props.handleInputChange}
                    value={props.inputValue}
                    placeholder='todo Info'
                    style={{ width: "300px", margin: "10px" }}
                />
                <Button type="default" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ width: "300px", margin: "10px" }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item>

                        {/* <input type='checkbox' checked={item.isChecked} onClick={() => { props.check(index) }} /> */}
                        <Checkbox style={{ marginRight: "10px" }} checked={item.isChecked} onClick={() => { props.check(index) }} />
                        <Input value={item.text} onChange={(e) => { props.handleNewInputChange(e, index) }} />
                    </List.Item>
                )}
            />

            <div style={{ marginLeft: '50px', }}>
                <Button value="All" onClick={(e) => { props.screen(e) }}>All</Button>
                <Button value="Active" onClick={(e) => { props.screen(e) }}>Active</Button>
                <Button value="Completed" onClick={(e) => { props.screen(e) }}>Completed</Button>


            </div>
        </div>
    )
}
export default TodoListUI;
