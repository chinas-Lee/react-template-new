import {_getRouterParams} from "../assets/js/other-methods";

const UA = navigator.userAgent;

const ConfigInfo = {
    projectInfo: {
        V: "5.1.1",
        DC: "h5",
        OSV: UA,
        PT: 'pt'
    }, // 项目配置信息
    deviceInfo: {
        isWeiXin: UA.toLowerCase().match(/MicroMessenger/i) === "micromessenger", // 是否微信环境
        isQQ: UA.toLowerCase().match(/QQ/i) === "qq", // QQ环境
        isIosBrowser: /iphone/i.test(UA.toLowerCase()) ? true : false, // ios浏览器环境
        isAndroid: window.bandroid ? true : false, // 是否安卓app环境
        isIos: _getRouterParams('channel') === 'yigeapp' && !window.bandroid ? true : false, // 是否ios的app环境
        isApp: (window.bandroid || _getRouterParams('channel') === 'yigeapp') ? true : false, // 是否app环境
    }, // 设备配置信息
    httpType: {
        get: 'get',
        post: 'post',
        put: 'put',
        delete: 'delete'
    }, // http类型
    reqErrorMsg: '网络请求错误，请重试',
    clearToastTime: 2 // toast提示时间
};

export default ConfigInfo
