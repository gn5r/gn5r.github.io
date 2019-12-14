import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from "@/components/TopPage"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
