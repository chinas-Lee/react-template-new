import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {setUserData} from '../store/actions'
import { _setPageTitle } from '../assets/js/other-methods'

class BeforeEach extends React.Component {
    render () {
        let {location: {pathname}, config, userData} = this.props
        let CurrentRouterConfig = config.find(item => item.path === pathname)
        // 非法路由
        if (!CurrentRouterConfig) return <Redirect to='404' />
        let {component} = CurrentRouterConfig
        // 设置标题
        _setPageTitle(CurrentRouterConfig.title)
        // 不需要认证
        if (!CurrentRouterConfig.auth) return <Route exact path={pathname} component={component} />
        // 登录信息存在
        if (userData.openId) return <Route exact path={pathname} component={component} />
        return <Redirect to='/login' />
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setUserData (data) {
            dispatch(setUserData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeforeEach)
