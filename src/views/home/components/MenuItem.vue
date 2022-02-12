<template>
    <li>
        <a :href="item?.action" v-if="MenuActionType.LINK === item?.type"
            target="_blank">{{ item?.title }}</a>
        <RouterLink v-else tag="a" :to="item.action">{{ item?.title }}</RouterLink>
        <SubMenu v-if="item?.children?.length" :items="item?.children"></SubMenu>
    </li>
</template>
<script setup lang="tsx">
import { RouterLink } from 'vue-router';
import { MenuItemType, MenuActionType } from '@/entity/MenuTypes';
import { defineAsyncComponent, defineComponent, PropType, reactive } from 'vue';
const SubMenu = defineAsyncComponent(() => import('./SubMenu.vue')) as any;
defineProps<{ item: MenuItemType }>();
</script>