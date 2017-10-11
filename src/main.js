import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route-config'
import './assets/styles/reset.css'
import App from './views/App.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes,
})

router.afterEach((to) => {
  document.title = to.name
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#application')

