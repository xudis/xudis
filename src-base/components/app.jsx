//快捷键 rcc
import React, { Component } from 'react';
import logo from '../logo.svg'

class App extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="logo" />
                <p className="title">react app组件</p>
            </div>
        );
    }
}

export default App;