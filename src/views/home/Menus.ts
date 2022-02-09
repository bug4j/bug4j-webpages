import MenuItem, { MenuActionType } from '../../entity/MenuItem';
const menus:MenuItem[] = [
    {
        title: '首页',
        action: '/',
    },
    {
        title: '分类',
        action: '/blog/categories',
        children: [
            {
                title: '前端',
                action: '/blog/category/front',
                children: [
                    {
                        title: 'VUE',
                        action: '/blog/category/vue',
                    }
                ]
            },
            {
                title: '运维',
                action: '/blog/category/mant',
            }
        ]
    }
];
export default menus;