// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
// 更新reducer方法
import { pageTitle, userData, setToken} from './methods'

// 导出所有reducer
export default combineReducers({
    pageTitle,
    userData,
    setToken
})
