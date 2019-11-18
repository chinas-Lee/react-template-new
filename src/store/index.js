// 引入createStore创建store，引入applyMiddleware 来使用中间件
import { applyMiddleware, createStore, compose } from 'redux'
// 中间件
import Thunk from 'redux-thunk'
// 引入所有的reducer
import reducers from './reducers'

// 开启chrome的调试工具
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
    applyMiddleware(Thunk)
)
let store = createStore(
    reducers,
    enhancer
)

export default store
