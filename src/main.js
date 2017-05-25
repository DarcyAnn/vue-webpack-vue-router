import Vue from 'vue'
import './assets/styles/reset.css';
import App from './views/App.vue'
import VueRouter from 'vue-router'
import routes from './route-config.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})

router.afterEach((to, from, next) => {
    document.title = to.name;
})

new Vue({
    el: '#application',
    router,
    render: h => h(App)
});


