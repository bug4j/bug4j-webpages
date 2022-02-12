<template>
    <li>
        <a v-if="item.type == MenuActionType.LINK" target="_blank" :href="item.action">{{ item.title }}</a>
        <RouterLink v-else="item.type == MenuActionType.ROUTER" tag="a" :to="item.action">{{ item.title }}</RouterLink>
        <template v-if="item?.children?.length">
            <SubMenu :open="menuOpen">
                <MobileMenuItem v-for="it in item.children" :item="it" :key="it.title"></MobileMenuItem>
            </SubMenu>
            <a class="mean-expand" :class="menuOpen ? 'mean-clicked' : ''" @click="menuOpen = !menuOpen" href="javascript:void" style="font-size: 18px"></a>
        </template>
    </li>
</template>
<script setup lang="ts">
    import SubMenu from './SubMenu.vue';
    import { MenuItemType, MenuActionType } from '../../../entity/MenuTypes';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const { item } = defineProps<{ item: MenuItemType }>();
    const menuOpen = ref<boolean>(false);
    console.log(item)
</script>
<style lang="less">
    .mean-expand {
        &::before {
            content:"+";
        }
        &.mean-clicked::before {
            content: "-";
        }
    }
</style>