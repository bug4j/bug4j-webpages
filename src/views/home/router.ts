import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeIndex from './HomeIndex.vue';

const routes:Array<RouteRecordRaw> = [{
    path:'',
    component: HomeIndex
}];
const router = createRouter({ routes, history: createWebHistory() });
export default router;
export { routes }