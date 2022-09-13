import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkHistory from '../components/Professional Software Development/WorkHistory.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/work-history',
    name: 'Work History',
    component: WorkHistory,
  },
]

const router = new VueRouter({
  routes
})

export default router
