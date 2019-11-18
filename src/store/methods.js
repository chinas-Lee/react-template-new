// 默认状态
import DefaultState from './state'

function pageTitle (state = DefaultState.pageTile, action) {
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data
        default:
            return state
    }
}
function userData (state = DefaultState.userData, action) {
    switch (action.type) {
        case 'SET_USER_DATA':
            return action.data
        default:
            return state
    }
}
function setToken (state = DefaultState.token, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.data
        default:
            return state
    }
}

export {
    pageTitle,
    userData,
    setToken
}
