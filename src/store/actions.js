const setPageTitle = function (data) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_PAGE_TITLE',
            data: data
        })
    }
}
const setUserData = function (data) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SET_USER_DATA',
            data: data
        })
    }
}
const setToken = function (data) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SET_TOKEN',
            data: data
        })
    }
}

export {
    setPageTitle,
    setUserData,
    setToken
}
