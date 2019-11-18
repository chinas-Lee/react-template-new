import React from 'react'

class TopHeader extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render () {
        return (
            <div>我是一个头部组件</div>
        )
    }
}

export default TopHeader
