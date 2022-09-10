import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkHistory from '../components/Professional Software Development/WorkHistory.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/work-history',
    name: 'Work History',
    component: WorkHistory
  },
]

const router = new VueRouter({
  routes
})

export default router
