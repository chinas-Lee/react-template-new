import FetchData from './fetch-data'
import ConfigInfo from "../utils/config";

// 登录获取token
const login = (bodyParams) => (FetchData( bodyParams, '/user/login', ConfigInfo.httpType.post, false));
// 获取用户信息
const getUserInfo = (bodyParams) => (FetchData(bodyParams, '/user/userCenter/pt/getUserInfo', ConfigInfo.httpType.get, true));

export {
    login,
    getUserInfo
}
