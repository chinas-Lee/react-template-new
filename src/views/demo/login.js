import React from 'react'
import { connect } from 'react-redux'
import { Button, Toast } from 'antd-mobile'
import { login, getUserInfo } from '../../service/interface'
import {setToken, setUserData} from '../../store/actions'
import { _setSessionStorage } from '../../assets/js/storage-methods'
import { _getRouterParams } from '../../assets/js/other-methods'
import ConfigInfo from '../../utils/config'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            demo: 'demo',
            params: _getRouterParams(this.props.location.search, 'type')
        }
        this.login = this.login.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this)
    }
    async login () {
        try {
            let result = await login({
                passWord: "",
                rand: "1234",
                username: "demo"
            })
            console.log(result)
            Toast.success('登录成功', ConfigInfo.clearToastTime)
            let {setToken} = this.props
            setToken(result)
            _setSessionStorage('token', result)
        } catch (e) {
            console.log(e)
        }
    }
    async getUserInfo () {
        try {
            let result = await getUserInfo()
            console.log(result)
            Toast.success('获取用户信息成功', ConfigInfo.clearToastTime)
            let {setUserData} = this.props
            setUserData(result)
            _setSessionStorage('userData', result)
        } catch (e) {
            console.log(e)
        }
    }
    render () {
        return (
            <div>
                <Button className="text-ellipsis" onClick={this.login}>点我登录</Button>
                <div className="example"></div>
                <Button className="text-ellipsis" onClick={this.getUserInfo}>点我获取用户信息</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setToken (data) {
            dispatch(setToken(data))
        },
        setUserData (data) {
            dispatch(setUserData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
