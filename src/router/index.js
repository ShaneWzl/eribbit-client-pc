import { createRouter, createWebHashHistory } from 'vue-router'

//按需导入组件
const Layout = () => import('@/views/layout.vue')
const Home = () => import('@/views/home')
const routes = [
  {
    path:'/',
    component:Layout,
    children: [
      {path: '/' , component: Home}
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
