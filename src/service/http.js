import Axios from 'axios'

// request
Axios.interceptors.request.use((req) => {
    // console.log(req)
    return req
}, error => Promise.reject(error))

// response
Axios.interceptors.response.use(res => {
    if (!res) return Promise.reject(res)
    // console.log(res)
    return res
}, error => Promise.reject(error))

export default Axios
