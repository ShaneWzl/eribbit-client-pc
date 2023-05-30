import { createStore } from 'vuex'
//引入数据持久化插件
import createPersistedstate from 'vuex-persistedstate'
//引入三个模块
import user from './modules/user'
import category from './modules/category'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    category,
    cart
  },
  //配置文件
  plugins:[
    createPersistedstate({
      //在其中可以加入配置选项
      // 表示本地存储的key名
      key:'eribbit-client-pc-124',
      // 表示需要本地存储的模块
      paths:['user' , 'cart' , {a:10}]
      
    })
  ]
})
