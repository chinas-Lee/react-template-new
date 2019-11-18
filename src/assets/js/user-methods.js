/**
 * Created by LCQ on 2019-05-17,0017.
 */
/*
* 用户信息
*/
import { _getLocalStorage, _setLocalStorage} from './storage-methods'

// 获取SN
const _getSN = () => {
    let sn = ''
    try {
        sn = _getLocalStorage('sn') || ''
        if (!sn) {
            sn = `web_${Math.random().toString(36).substr(2, 15)}`
            _setLocalStorage('sn', sn)
        }
    } catch (e) {
        console.log(e)
    }
    return sn
}

export {
    _getSN
}
