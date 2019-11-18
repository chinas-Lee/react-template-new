import Axios from './http'
import ConfigInfo from '../utils/config'
import BaseUrl from "./ip-config";
import { _getSN } from '../assets/js/user-methods'
import { _removeSessionStorage } from '../assets/js/storage-methods'
import { Toast } from 'antd-mobile'

/*
 * 异步请求
 * bodyParams - 参数体
 * headParams - URL后参数
 * method - 请求类型
 * isAuth - 是否需要认证
 * */
const FetchData = function (bodyParams = {}, headParams = '', method = 'post', isAuth = true) {
    return new Promise((resolve, reject) => {
        let token = sessionStorage.getItem('token') || '';
        // 区别开发/线上环境
        let url = process.env.NODE_ENV === 'development' ? headParams : BaseUrl.basicApi + headParams
        // 需要先登录
        if (isAuth && !token) {
            Toast.info('请先登录', ConfigInfo.clearToastTime);
            setTimeout(function () {
                _removeSessionStorage('userData');
                window.location.href = window.location.origin + '/#/login';
            }, 1000);
            return false;
        }
        // 请求头信息
        let headers = {
            pt: ConfigInfo.projectInfo.PT,
            dc: ConfigInfo.projectInfo.DC,
            did: _getSN(),
            osv: ConfigInfo.projectInfo.OSV,
            v: ConfigInfo.projectInfo.V,
            Authorization: token
        };
        let axios;
        // 根据不同请求配置信息
        switch (method) {
            case 'get':
                axios = Axios.get(url, {params: bodyParams, headers});
                break;
            case 'post':
                axios = Axios.post(url, bodyParams, {headers});
                break;
            case 'put':
                axios = Axios.put(url, bodyParams, {headers});
                break;
            case 'delete':
                axios = Axios.delete(url, {headers});
                break;
            default:
                throw new Error('请输入正确的请求类型');
        }
        axios.then((res) => {
            let result = res.data || {};
            if (!result) {
                Toast.info(ConfigInfo.reqErrorMsg, ConfigInfo.clearToastTime);
                reject(ConfigInfo.reqErrorMsg)
            }
            switch (+result.code) {
                // 正常请求
                case 0:
                    resolve(result.data);
                    break
                // 系统错误
                case -1:
                    Toast.info(result.msg || ConfigInfo.reqErrorMsg, ConfigInfo.clearToastTime)
                    reject(result.msg || ConfigInfo.reqErrorMsg)
                    break
                // 未登录
                case -2:
                    _removeSessionStorage('userData')
                    window.location.href = window.location.origin + '/#/login'
                    break
                // 其它错误
                default:
                    Toast.info(result.msg || ConfigInfo.reqErrorMsg, ConfigInfo.clearToastTime)
                    reject(result.msg || ConfigInfo.reqErrorMsg)
            }
        }, err => {
            // 网络或后端错误
            console.log(err)
            Toast.info(ConfigInfo.reqErrorMsg, ConfigInfo.clearToastTime)
            reject(ConfigInfo.reqErrorMsg)
        }).catch(error => {
            // http或代码错误
            console.log(error)
            Toast.info(ConfigInfo.reqErrorMsg, ConfigInfo.clearToastTime)
            reject(ConfigInfo.reqErrorMsg)
        })
    })
}

export default FetchData

