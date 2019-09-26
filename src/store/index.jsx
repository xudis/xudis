import { createStore, compose } from 'redux';
import reducer from './reducer';
// applyMiddleware, 在使用redux-thunk时调用
// import thunk from 'redux-thunk';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),

);

const store = createStore(
    //创建reducer构建初始数据
    reducer, enhancer);

export default store;
