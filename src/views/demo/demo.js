import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import TopHeader from '../../component/layout/top-header'
import {login} from '../../service/interface'
import {setPageTitle} from '../../store/actions'

class Demo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            demo: 'demo'
        }
        this.handleClick = this.handleClick.bind(this)
        this.toPage = this.toPage.bind(this)
    }
    UNSAFE_componentWillMount () {
        let {setPageTitle} = this.props
        setPageTitle('新标题')
    }
    async handleClick () {
        try {
            let result = await login({"type":1,"projectNo":5892})
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }
    toPage () {
        this.props.history.push({pathname: '/login', search: 'type=demo'})
    }
    render () {
        return (
            <div>
                <TopHeader item={this.state.demo} />
                <Button type="primary" onClick={this.handleClick} >点我请求数据</Button>
                <Button onClick={this.toPage}>点我去登录页</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            dispatch(setPageTitle(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
