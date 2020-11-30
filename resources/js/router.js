import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Welcome',
            component: () => import('./welcome')
        }
    ]
});

export default router;
