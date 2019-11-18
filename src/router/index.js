import React from 'react'
import {HashRouter, Switch} from 'react-router-dom'
import RouterConfig from './config'
import RouterAuth from './before-each'

export default class Router extends React.Component{
    render () {
        return (
            <HashRouter>
                <Switch>
                    <RouterAuth config={RouterConfig} />
                </Switch>
            </HashRouter>
        )
    }
}
