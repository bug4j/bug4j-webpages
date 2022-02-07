import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BlogIndex from './BlogIndex.vue';

const routes:Array<RouteRecordRaw> = [{
    path:'',
    component: BlogIndex
}];
const router = createRouter({ routes, history: createWebHistory() });
export default router;
export { routes }