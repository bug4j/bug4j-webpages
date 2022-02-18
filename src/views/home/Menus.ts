import { MenuItemType, MenuActionType } from '../../entity/MenuTypes';
import { Router } from 'vue-router';
const menus:MenuItemType[] = [
    {
        title: '首页',
        action: '/',
        type: MenuActionType.ROUTER,
        children: [
            {
                title: '摄影动态',
                action:'protfolio',
                type: MenuActionType.HASH,
            },
            {
                title: '最新文章',
                action:'bloglist',
                type: MenuActionType.HASH,
            }
        ]
    },
    {
        title: '摄影',
        action: '/photograph',
        type: MenuActionType.ROUTER
    },
    {
        title: '博客',
        action: '/blog',
        type: MenuActionType.ROUTER,
        children: [
            {
                title: '前端',
                action: '/blog/category/front',
                type: MenuActionType.ROUTER,
                children: [
                    {
                        title: 'VUE',
                        action: '/blog/category/vue',
                        type: MenuActionType.ROUTER
                    }
                ]
            },
            {
                title: '运维',
                action: '/blog/category/mant',
                type: MenuActionType.ROUTER
            }
        ]
    },
    {
        title: '文档',
        action: '/docs',
        type: MenuActionType.ROUTER
    },
    {
        title: '关于我',
        action: '/about',
        type: MenuActionType.ROUTER
    },
];

function flatMenu(menus:MenuItemType[], parent:MenuItemType | null = null, result:MenuItemType[] = []) {
    menus.forEach(menu => {
        !menu.parent && (menu.parent = parent);
        result.push(menu);
        menu.children && (result = [...result, ...flatMenu(menu.children, menu, result)]);
    })
    return result;
}
const flatMenus = flatMenu(menus);

function getParents(current:MenuItemType, results:MenuItemType[] = []):MenuItemType[] {
    if(!current.parent) {
        return results;
    } else {
        results.unshift(current.parent);
        return getParents(current.parent, results);
    }
}

function navMenu(menu:MenuItemType, router:Router) {
    if(menu.type === MenuActionType.ROUTER) {
        router.push({ path: menu.action });
    } else if(menu.type === MenuActionType.LINK) {
        window.open(menu.action);
    } else if(menu.type === MenuActionType.HASH) {
        if(menu.action.indexOf("#") > 0) {
            router.push({ path: menu.action });
        } else {
            const parents = getParents(menu);
            let path = menu.action.includes("#") ? menu.action : '#' + menu.action;
            let el = document.querySelector(`${path},[hash=${path.replace("#", '')}]`);
            if(el) {
                location.hash = path;
                return el.scrollIntoView();
            }
            for(let i = 0; parents[i]; i++) {
                let p = parents.at(i - parents.length + 1);
                path = p?.action + path;
                if(p?.type === MenuActionType.LINK) break;
            }
            path && (location.href = path);
        }
    }
}

export { navMenu, flatMenus as simpleMenus, menus as treeMenus };
export default menus;