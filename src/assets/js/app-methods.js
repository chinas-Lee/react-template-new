import ConfigInfo from "../../utils/config";

// 调用安卓方法
const _useAndroid = function (name, params) {
    if (!ConfigInfo.deviceInfo.isAndroid || !name || typeof name !== 'string') return false;
    try {
        var res = params ? window.bandroid[name](params) : window.bandroid[name]();
        if (!res) return false;
        return JSON.parse(res);
    } catch (e) {
        console.log(e);
        return false
    }
};

// 调用ios方法
const _useIos = function (name, params) {
    try {
        if (!ConfigInfo.deviceInfo.isIos || !name || typeof name !== 'string') return false;
        window.webkit.messageHandlers[name].postMessage(params);
    } catch (e) {
        console.log(e);
        return false;
    }
};

export {
    _useAndroid,
    _useIos
}
