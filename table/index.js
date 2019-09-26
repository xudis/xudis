import React from 'react'
//要渲染了  引入ReactDOM    
import ReactDOM from 'react-dom'
//引入组件
import App from "./Table"
//引入css    引入自定义模块  需要写路径   要退出就 ../   当前  时 ./
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))