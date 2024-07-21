import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue';
import Blog from '../components/blog/Blog.vue';
import Projects from '../components/projects/Projects.vue';
import WorkHistory from '../components/cv/WorkHistory.vue';
import About from '../components/about/About.vue';

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
    path: '/cv',
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
