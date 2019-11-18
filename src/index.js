import React from './init'
import ReactDOM from 'react-dom'
import Router from './router/index'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'))
serviceWorker.unregister()
