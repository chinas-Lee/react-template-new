// 获取路由中url上传递的参数
const _getRouterParams = (search, key) => {
    if (!search || !key) return ''
    try {
        let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
        let r = search.substr(1).match(reg)
        let res
        r !== null ? res = decodeURI(r[2]) : res = ''
        return res
    } catch (err) {
        console.log(err)
        return ''
    }
}

// 设置页面标题
const _setPageTitle = (title) => {
    title && (document.title = title)
}

export {
    _getRouterParams,
    _setPageTitle
}
