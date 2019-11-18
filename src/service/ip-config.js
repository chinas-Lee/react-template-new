// 不同环境接口api配置
const ServiceType = {
    dev: '', // 开发环境
    pro: '', // 测试环境
    api: '' // 线上环境
}
const BaseUrl = {
    basicApi: ServiceType[process.env.SERVICE_TYPE]
}

export default BaseUrl
