import Vue from 'vue';
import VueRouter from 'vue-router';
import AnnualMovies from './views/AnnualMovies.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',
            name: 'AnnualMovies',
            component: AnnualMovies
        }
    ]
})