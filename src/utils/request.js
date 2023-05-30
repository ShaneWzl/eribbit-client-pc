// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'


export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    //axios的配置项
    baseURL,
    timeout:5000
})

// 2. 请求拦截器
instance.interceptors.request.use((config) => {
    // 2.1第一个函数的参数config表示请求体的数据对象
   if(store.state.user.profile.token) {
       config.headers.Authorization = `Bearer ${store.state.user.profile.token}`
   }
   return config
} , (err) => {
    return Promise.reject(err)
})

//3. 响应拦截器
instance.interceptors.response.use(res => res.data , err => {
    // 如果是401状态码 则进入这个函数
    if(err.response && err.response.status === 401) {
         // 1. 清空无效用户信息
         // 2. 跳转到登录页
         // 3. 跳转需要传参（当前路由地址） 给登录页码
         store.commit('user/setUser', {})
         // js模块中： router.currentRoute.value.fullpath 就是当前路由地址  router.currentRoute 是ref响应数据 所以要在value中访问fullpath
         const fullpath = encodeURIComponent(router.currentRoute.value.fullPath)     // encodeURIComponent() 函数是解析编码 防止解析路径的时候出问题
         router.push('login?redirectUrl=' + fullpath)
    }
    return Promise.reject(err)
})


// 4. 请求函数封装
export default (url,method , submitData) => {
    // 三个参数分别为请求地址 请求类型 请求数据
    return instance({
        url,
        method,
        //可以用[] 里面写上三元表达式的方式来写key   
        // 因为不知道submitData是params还是data
        [method.toLowerCase() === 'get' ? 'params' : 'data'] : submitData
    })
}
