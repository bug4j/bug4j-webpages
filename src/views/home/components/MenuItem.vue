<template>
    <li>
        <a :href="item.action" @click.prevent.stop="menuClicked(item)">{{ item?.title }}</a>
        <SubMenu v-if="item?.children?.length" :items="item?.children" @itemClicked="menuClicked"></SubMenu>
    </li>
</template>
<script setup lang="tsx">
import { MenuItemType } from '@/entity/MenuTypes';
import { defineAsyncComponent, defineEmits } from 'vue';
const SubMenu = defineAsyncComponent(() => import('./SubMenu.vue')) as any;
defineProps<{ item: MenuItemType }>();
const emits = defineEmits(['itemClicked']);
function menuClicked(item:MenuItemType) {
    emits('itemClicked', item);
}
</script>