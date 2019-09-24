import React, { Component } from 'react';
// import './index.css';
import 'antd/dist/antd.css';
import { Table, Menu, Icon, Input } from 'antd';
const { SubMenu } = Menu;
class App extends Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    private dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园2号',
        },
        {
            key: '3',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园3号',
        },
        {
            key: '4',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园4号',
        },
    ];
    private columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        Navigation One
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                Navigation Three - Submenu
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                        </a>
                    </Menu.Item>
                </Menu>
                
                <Table bordered columns={this.columns} dataSource={this.dataSource} />
            </div>
        )
    }
}

export default App;