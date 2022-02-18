import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Portfolio from './components/Portfolio.vue';
import HomeIndex from './HomeIndex.vue';

const routes:Array<RouteRecordRaw> = [{
    path:'',
    component: HomeIndex,
    meta:{
        title:'首页',
        active: false,
    },
    children:[
        {
            path:'p',
            component: Portfolio,
            meta:{
                title:'最新摄影',
                active: false,
            },
        }
    ]
}];
const router = createRouter({ routes, history: createWebHistory() });
export default router;
export { routes }