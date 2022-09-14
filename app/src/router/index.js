import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';
import Projects from '../components/Projects.vue';
import WorkHistory from '../components/Professional Software Development/WorkHistory.vue';
import About from '../components/About.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/work-history',
    name: 'Work History',
    component: WorkHistory,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  routes
})

export default router
