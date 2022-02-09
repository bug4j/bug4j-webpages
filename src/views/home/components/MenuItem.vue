<template>
    <li>
        <template v-if="item.children?.length">
            <a href="javascript:void">{{ item?.title }}</a>
            <SubMenu :items="item.children"></SubMenu>
        </template>
        <template v-else>
            <RouterLink v-if="item?.type === MenuActionType.ROUTER" tag="a" :to="item.action"></RouterLink>
            <a :href="item?.action" v-else
                :target="MenuActionType.LINK === item?.type ? '_self' : '_blank'">{{ item?.title }}</a>
        </template>
    </li>
</template>
<script lang="ts" setup>
    import MenuItem from '@/entity/MenuItem';
    import { MenuActionType } from '@/entity/MenuItem';
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';
    import SubMenu from './SubMenu.vue';
    defineProps({
        item: MenuItem
    })
</script>
