// 配置请求对象
import axios from "axios";

export const baseURL = "http://localhost:1111";

const axiosInstance = axios.create({
    baseURL
})

// 响应错误拦截
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '发生错误')
    }
)

export { axiosInstance }