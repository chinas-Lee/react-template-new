import React from 'react'

export default class Index extends React.Component {
    render () {
        const StyleInfo = {
            page: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                textAlign: 'center',
                fontSize: '2rem',
                color: '#333333',
                margin: '0 0 10px 0'
            },
            content: {
                fontSize: '1.6rem',
                color: '#606060'
            }
        }
        return (
            <div style={StyleInfo.page}>
                <div>
                    <h1 style={StyleInfo.title}>404</h1>
                    <p style={StyleInfo.content}>你访问的页面不存在</p>
                </div>
            </div>
        )
    }
}
