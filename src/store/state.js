import {_getSessionStorage, _getSessionStorageObject} from '../assets/js/storage-methods'

// 初始化状态
const State = {
    pageTile: '首页',
    userData: _getSessionStorageObject('userData') || {}, // 用户信息
    token: _getSessionStorage('token') // token认证信息
};

export default State
