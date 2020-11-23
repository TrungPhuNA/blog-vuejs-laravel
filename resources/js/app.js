// require('./bootstrap');

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Vue from 'vue';
import Paginate from 'vuejs-paginate'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Paginate)



const routes = [
    {
        path: '/',
        component: () => import('./Master'),
        children: [
            {
                path: '',
                component: () => import('./pages/home/Home')
            },
            {
                name : 'page.menu',
                path: '/menu/:slug([0-9a-z-]+)-:id',
                props: true,
                component: () => import('./pages/menu/Menu')
            },
            {
                name : 'page.article',
                path: '/article/:slug([0-9a-z-]+)-:id',
                props: true,
                component: () => import('./pages/article/Article')
            },
            {
                path: '/gioi-thieu',
                name: 'about',
                props: true,
                component: () => import('./pages/about/About')
            },
        ]
    },

]

const route = new VueRouter({
    routes,
    mode: 'history', // tắt dấu # trong url => SEO
})

const store = new Vuex.Store({
    state: {
        menus: 0
    },
    methods : {
        getListMenus()
        {
            this.axios.get('/api/menus')
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})

const app = new Vue({
    el: '#app',
    router: route,
    store
});

// const app = new Vue({
//     router: route
// }).$mount('#app')
